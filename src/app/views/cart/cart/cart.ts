import { Component } from '@angular/core';
import { CartIngredientsList } from "../components/cart-ingredients-list/cart-ingredients-list";

@Component({
  selector: 'app-cart',
  imports: [CartIngredientsList],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {}
