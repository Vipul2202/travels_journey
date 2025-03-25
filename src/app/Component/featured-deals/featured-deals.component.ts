import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-deals.component.html',
  styleUrl: './featured-deals.component.css',
})
export class FeaturedDealsComponent {
  featuredDeals = [
    { name: 'Dubai to London', price: 87, img: '/assets/Images/a-a.jpg' },
    { name: 'Paris to London', price: 39, img: '/assets/Images/a-a.jpg' },
    { name: 'Vietnam to Yemen', price: 49, img: '/assets/Images/a-a.jpg' },
    { name: 'Portugal to Qatar', price: 59, img: '/assets/Images/a-a.jpg' },
  ];
}
