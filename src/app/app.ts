import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/headers/components/header/header';
import { Footer } from './components/footer/footer';
// import { seedData } from './shared/data/seed';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Cocktails');

  constructor() {
    // seedData();
  }
}
