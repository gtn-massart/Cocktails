import { Component, output, signal } from '@angular/core';
import { CocktailsList } from './components/cocktails-list/cocktails-list';
import { CocktailDetails } from './components/cocktail-details/cocktail-details';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { cocktails } from '../../shared/data/cocktails.data';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsList, CocktailDetails],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.scss',
})
export class Cocktails {
  cocktails = signal<Cocktail[]>(cocktails);
  selectCocktail(cocktailName: string){
        
  } 
}
