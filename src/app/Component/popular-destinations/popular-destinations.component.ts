import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-destinations.component.html',
  styleUrl: './popular-destinations.component.css',
})
export class PopularDestinationsComponent {
  destinations = [
    { name: 'Canada', img: '/assets/Images/a-a.jpg' },
    { name: 'France', img: '/assets/Images/a-a.jpg' },
    { name: 'Germany', img: '/assets/Images/a-a.jpg' },
    { name: 'Spain', img: '/assets/Images/a-a.jpg' },
  ];
}
