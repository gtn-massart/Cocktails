import { Component, computed, Host, inject } from '@angular/core';
import { CocktailsService } from '../../../../../../shared/services/cocktails.service';

@Component({
  selector: 'app-admin-cocktails-list',
  imports: [],
  templateUrl: './admin-cocktails-list.html',
  styleUrl: './admin-cocktails-list.scss',
  host: {class: 'card'}
})
export class AdminCocktailsList {
  cocktailsService = inject(CocktailsService);
  cocktails = computed(() => this.cocktailsService.cocktailsResource.value() || []);
}
