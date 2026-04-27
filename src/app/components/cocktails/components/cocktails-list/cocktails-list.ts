import { Component, computed, input, output, signal } from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces/cocktail.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktails-list',
  imports: [FormsModule],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.scss',
})
export class CocktailsList {
  filter = signal('');
  cocktails = input<Cocktail[]>();
  filteredCocktails = computed(() =>
    this.cocktails()?.filter(({ name }) =>
      name.toLowerCase().includes(this.filter().toLowerCase()),
    ),
  );
  selectedCocktailName = input.required();
  selectCocktail = output<string>();
}
