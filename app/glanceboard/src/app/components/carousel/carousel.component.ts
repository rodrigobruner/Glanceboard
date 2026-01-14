import { Component, Input } from '@angular/core';
import { NgForOf, NgComponentOutlet } from '@angular/common';
import { DateTimeComponent } from '../datetime/datetime.component';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [NgForOf, NgComponentOutlet, DateTimeComponent],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  @Input() components: any[] = [];
}