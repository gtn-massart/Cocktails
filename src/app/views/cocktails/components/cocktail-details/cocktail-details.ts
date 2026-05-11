import { Component, input, output } from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  imports: [],
  templateUrl: './cocktail-details.html',
  styleUrl: './cocktail-details.scss',
})
export class CocktailDetails {
  cocktail = input.required<Cocktail>();
  isLiked = input.required<boolean>();

  likecocktail = output<string>();
  unlikecocktail = output<string>();
  addIngredients = output<string[]>();

}
