import { Component, computed, inject, signal } from '@angular/core';
import { CocktailsList } from './components/cocktails-list/cocktails-list';
import { CocktailDetails } from './components/cocktail-details/cocktail-details';
import { CocktailsService } from '../../shared/services/cocktails.service';

@Component({
  selector: 'app-cocktails',
  imports: [CocktailsList, CocktailDetails],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.scss',
})
export class Cocktails {
  cocktailsService = inject(CocktailsService);
  cocktails = computed(() => this.cocktailsService.cocktailsResource.value() || []);
  selectedCocktailId = signal<string | null>(null);
  selectedCocktail = computed(() =>
    this.cocktails().find(({ _id }) => _id === this.selectedCocktailId()),
  );
}
