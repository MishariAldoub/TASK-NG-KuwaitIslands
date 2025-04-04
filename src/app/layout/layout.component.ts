import { Component } from '@angular/core';

import islands from '../../data/islands';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  islands = islands;
}
