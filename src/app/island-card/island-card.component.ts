import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-card',
  standalone: true,
  imports: [],
  templateUrl: './island-card.component.html',
  styleUrl: './island-card.component.css',
})
export class IslandCardComponent {
  @Input() island!: Island;
  @Output() selectIsland = new EventEmitter<Island>();
  visitorCounter = 0;
  onSelect() {
    this.visitorCounter++;
    this.island.visitors = this.visitorCounter;
    this.selectIsland.emit(this.island);
    console.log(this.visitorCounter);
  }
}
