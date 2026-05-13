import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-cocktails',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-cocktails.html',
  styleUrl: './admin-cocktails.scss',
})
export class AdminCocktails {}
