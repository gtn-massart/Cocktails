import { Component, computed, inject, signal } from '@angular/core';
import { CocktailsList } from './components/cocktails-list/cocktails-list';
import { CocktailDetails } from './components/cocktail-details/cocktail-details';
import { CocktailsService } from '../../shared/services/cocktails.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsList, CocktailDetails],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.scss',
})
export class Cocktails {
  private cocktailsService = inject(CocktailsService);
  private cartService = inject(CartService);

  cocktails = computed(() => this.cocktailsService.cocktailsResource.value() || []);

  selectedCocktailId = signal<string | null>(null);
  selectedCocktail = computed(() =>
    this.cocktails().find(({ _id }) => _id === this.selectedCocktailId()),
  );
  selectedCocktailLiked = computed(() => {
    const selectedCocktailId = this.selectedCocktailId();
    return selectedCocktailId ? this.likedCoctailIds().includes(selectedCocktailId) : false;
  });

  likedCoctailIds = computed(() => this.cartService.likedCocktailsIds());

  likeCocktail(cocktailId: string) {
    this.cartService.likeCocktail(cocktailId);
  }
  unlikeCocktail(cocktailId: string) {
    this.cartService.unlikeCocktail(cocktailId);
  }

  addIngredients(ingredients: string[]) {
    this.cartService.addIngredients(ingredients);
  }
}
