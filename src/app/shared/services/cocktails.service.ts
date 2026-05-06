import { Injectable, resource } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  BASE_URL = 'https://restapi.fr/api.cocktails';

  cocktailsResource = resource({
    loader: async (): Promise<Cocktail[]> => (await fetch(this.BASE_URL)).json(),
  });
}
