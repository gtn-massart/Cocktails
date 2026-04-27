import { Component } from '@angular/core';
import { HeaderMenu } from '../header-menu/header-menu';

@Component({
  selector: 'app-header',
  imports: [HeaderMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
