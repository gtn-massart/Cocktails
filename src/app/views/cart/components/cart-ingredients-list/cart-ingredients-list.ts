import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-cart-ingredients-list',
  imports: [],
  templateUrl: './cart-ingredients-list.html',
  styleUrl: './cart-ingredients-list.scss',
})
export class CartIngredientsList {
  ingredients = input<string[]>([]);
  ingredientDisplays = computed(() =>
    Object.entries(
      this.ingredients().reduce(
        (acc, i) => {
          if (acc[i]) {
            acc[i]++;
          } else {
            acc[i] = 1;
          }
          return acc;
        },
        {} as { [s: string]: number },
      ),
    ),
  );
}
