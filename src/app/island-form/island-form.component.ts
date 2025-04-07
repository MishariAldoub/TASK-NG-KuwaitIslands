import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;

  bookTrip(form: NgForm) {
    const { name, phone } = form.value;
    const confirmed = confirm(
      `Confirm booking ${this.island.name} for ${name} with phone number ${phone}`
    );
    if (confirmed) {
      this.island.visitors++;
      form.reset();
    }
  }
}
