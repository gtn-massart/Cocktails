import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktail-details',
  imports: [],
  templateUrl: './cocktail-details.html',
  styleUrl: './cocktail-details.scss',
})
export class CocktailDetails {
  cocktail: Cocktail = {
    imageUrl:
      'https://images.unsplash.com/photo-1622322331040-088df8424c89?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mojito',
    description: `Le mojito est un cocktail classique d'origine cubaine, très rafraîchissant et populaire dans le monde entier.`,
  };
}
