import { Component } from '@angular/core';

import islands from '../../data/islands';
import { HeaderComponent } from '../header/header.component';
import { IslandListComponent } from '../island-list/island-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, IslandListComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  islands = islands;
}
