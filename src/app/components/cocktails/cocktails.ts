import { Component } from '@angular/core';
import { CocktailsList } from './components/cocktails-list/cocktails-list';
import { CocktailDetails } from './components/cocktail-details/cocktail-details';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsList, CocktailDetails],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.scss',
})
export class Cocktails {}
