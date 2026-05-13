import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-cocktails-form',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-cocktails-form.html',
  styleUrl: './admin-cocktails-form.scss',
  host: { class: 'card' },
})
export class AdminCocktailsForm {
  private fb = inject(FormBuilder);

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

  submit() {}
}
