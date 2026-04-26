import { Component, input, output } from '@angular/core';
import { Cocktail } from '../../../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-list',
  imports: [],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.scss',
})
export class CocktailsList {
  cocktails = input<Cocktail[]>();
    selectCocktail = output<string>();
}
