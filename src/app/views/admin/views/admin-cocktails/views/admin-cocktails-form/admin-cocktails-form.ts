import { Component, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CocktailsService } from '../../../../../../shared/services/cocktails.service';
import { CocktailForm } from '../../../../../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-admin-cocktails-form',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-cocktails-form.html',
  styleUrl: './admin-cocktails-form.scss',
  host: { class: 'card' },
})
export class AdminCocktailsForm {
  private fb = inject(FormBuilder);
  private cocktailsService = inject(CocktailsService);

  isLoading = signal(false);

  cocktailForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: [''],
    description: [''],
    ingredients: this.fb.array([]),
  });

  get ingredientsControl() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  get nameControl() {
    return this.cocktailForm.get('name') as FormControl;
  }

  addIngredient() {
    this.ingredientsControl.push(this.fb.control(''));
  }

  deleteIngredient(index: number) {
    this.ingredientsControl.removeAt(index);
  }

  async submit() {
    this.isLoading.set(true);
    try {
      await this.cocktailsService.createCocktail(this.cocktailForm.getRawValue() as CocktailForm);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading.set(false);
    }
  }
}
