import { Component } from '@angular/core';

import islands from '../../data/islands';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  islands = islands;
}
