import { Injectable, resource } from '@angular/core';
import { Cocktail, CocktailForm } from '../interfaces/cocktail.interface';

const BASE_URL = 'https://restapi.fr/api/cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  cocktailsResource = resource({
    loader: async (): Promise<Cocktail[]> => (await fetch(BASE_URL)).json(),
  });

  async deleteCocktail(cocktailId: string) {
    await fetch(`${BASE_URL}/${cocktailId}`, {
      method: 'DELETE',
    });
    this.cocktailsResource.reload();
  }

  async createCocktail(cocktailForm: CocktailForm) {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(cocktailForm),
      headers: {
        'content-type': 'application/json',
      },
    });
    const body = await response.json();
    if (response.ok) {
      this.cocktailsResource.reload();
    } else {
      throw new Error(body);
    }
  }
}
