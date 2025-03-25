import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightSearchComponent } from "../Component/flight-search-component/flight-search-component.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-flight-search-page',
  standalone: true,
  imports: [FlightSearchComponent, CommonModule],
  templateUrl: './flight-search-page.component.html',
  styleUrls: ['./flight-search-page.component.css'],
})
export class FlightSearchPageComponent {
  destinations = [
    {
      id: 1,
      name: 'New York',
      image:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format',
      price: '$199',
    },
    {
      id: 2,
      name: 'London',
      image:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format',
      price: '$349',
    },
    {
      id: 3,
      name: 'Tokyo',
      image:
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format',
      price: '$599',
    },
    {
      id: 4,
      name: 'Paris',
      image:
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format',
      price: '$299',
    },
  ];

  constructor(private router: Router) {}

  handleViewFlights(destination: string) {
    this.router.navigate(['/flights'], { state: { destination } });
  }

  handleViewAllDestinations() {
    this.router.navigate(['/flights']);
  }
}
