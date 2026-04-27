import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  imports: [],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.scss',
})
export class HeaderMenu {
  show = signal(false);
  navigations = [
    {
      path: '#',
      name: 'Liste des cocktails'
    },
    {
      path: '#',
      name: 'Panier'
    }
  ]

  toggleMenu() {
    this.show.update((s) => !s);
  }
}
