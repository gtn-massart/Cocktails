import { Component, computed, inject } from '@angular/core';
import { CartIngredientsList } from '../components/cart-ingredients-list/cart-ingredients-list';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CartIngredientsList],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private cartService = inject(CartService);
  ingredients = computed(() => this.cartService.ingredients())
}
