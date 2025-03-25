import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-deals.component.html',
  styleUrl: './flight-deals.component.css',
})
export class FlightDealsComponent {
  deals = [
    { name: 'Canada', price: 150, img: '/assets/Images/a-a.jpg' },
    { name: 'France', price: 120, img: '/assets/Images/a-a.jpg' },
    { name: 'Germany', price: 130, img: '/assets/Images/a-a.jpg' },
    { name: 'Spain', price: 100, img: '/assets/Images/a-a.jpg' },
  ];
}
