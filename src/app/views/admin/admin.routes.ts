import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { AdminUsers } from './views/admin-users/admin-users/admin-users';
import { AdminCocktails } from './views/admin-cocktails/admin-cocktails/admin-cocktails';

export const routes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      {
        path: 'users',
        component: AdminUsers
      },
      {
        path: 'cocktails',
        component: AdminCocktails
      },
      {
        path: '',
        redirectTo: 'cocktails',
        pathMatch: 'full'
      }
    ]
  },
];
