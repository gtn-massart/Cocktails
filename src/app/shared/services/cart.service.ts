import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  likedCocktailsIds = signal<string[]>([]);

  likeCocktail(cocktailId: string) {
    this.likedCocktailsIds.update((likedCocktails) => [...likedCocktails, cocktailId]);
  }

  unlikeCocktail(cocktailId: string) {
    this.likedCocktailsIds.update((likedCocktails) =>
      likedCocktails.filter((id) => id !== cocktailId),
    );
  }
}
