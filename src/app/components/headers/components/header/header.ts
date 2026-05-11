import { Component } from '@angular/core';
import { HeaderMenu } from '../header-menu/header-menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [HeaderMenu, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
