import { Routes } from '@angular/router';
import { Cocktails } from './views/cocktails/cocktails';
import { NotFound } from './views/not-found/not-found';

export const routes: Routes = [
  {
    path: 'cocktails',
    component: Cocktails,
  },
  {
    path: 'cart',
    loadComponent: async () => (await import('./views/cart/cart/cart')).Cart,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cocktails',
  },
  {
    path: '**',
    component: NotFound,
  },
];
