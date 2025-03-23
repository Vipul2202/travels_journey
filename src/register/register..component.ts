import { Component, OnInit } from '@angular/core';

interface Bus {
  id: number;
  company: string;
  type: string;
  rating: number;
  reviews: number;
  tags: string[];
  departureLocation: string;
  departureTime: string;
  departureDate: string;
  arrivalLocation: string;
  arrivalTime: string;
  arrivalDate: string;
  duration: string;
  price: number;
  seatsLeft: number;
  features: string[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class Registercomponent implements OnInit {
  totalBuses: number = 118;
  buses: Bus[] = [];
  
  filters = {
    redDeals: true,
    primo: false,
    safetyPlus: false,
    liveTracking: false,
    flexiTicket: false,
    departureTime: '6 am - 12 pm',
    arrivalTime: '6 am - 12 pm',
    busType: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.loadBuses();
  }

  loadBuses() {
    this.buses = [
      {
        id: 1,
        company: 'Intracity Travels',
        type: 'A/C Sleeper (2+1)',
        rating: 4.7,
        reviews: 314,
        tags: ['Primo', 'FlexiTicket'],
        departureLocation: 'Koyambedu',
        departureTime: '8:30 am',
        departureDate: 'May 20',
        arrivalLocation: 'Madiwala',
        arrivalTime: '2:40 pm',
        arrivalDate: 'May 20',
        duration: '6h 10m',
        price: 599,
        seatsLeft: 24,
        features: ['Primo', 'Safety+', 'Boarding & Dropping Points', 'Rest Stops', 'Bus Photos & Amenities', 'Reviews & Policies']
      },
      {
        id: 2,
        company: 'YBM Travels',
        type: 'A/C Sleeper (2+1)',
        rating: 4.6,
        reviews: 336,
        tags: ['Primo', 'FlexiTicket'],
        departureLocation: 'Koyambedu',
        departureTime: '11:00 pm',
        departureDate: 'May 20',
        arrivalLocation: 'Madiwala',
        arrivalTime: '5:15 am',
        arrivalDate: 'May 21',
        duration: '6h 15m',
        price: 808,
        seatsLeft: 30,
        features: ['Safety+', 'Boarding & Dropping Points', 'Rest Stops', 'Bus Photos & Amenities', 'Reviews & Policies']
      },
      {
        id: 3,
        company: 'Hail Trip',
        type: 'A/C Sleeper (2+1)',
        rating: 4.2,
        reviews: 190,
        tags: ['Primo', 'FlexiTicket'],
        departureLocation: 'Koyambedu',
        departureTime: '11:50 pm',
        departureDate: 'May 20',
        arrivalLocation: 'Madiwala',
        arrivalTime: '6:00 am',
        arrivalDate: 'May 21',
        duration: '6h 10m',
        price: 599,
        seatsLeft: 25,
        features: []
      }
    ];
  }

  resetFilters() {
    this.filters = {
      redDeals: false,
      primo: false,
      safetyPlus: false,
      liveTracking: false,
      flexiTicket: false,
      departureTime: '',
      arrivalTime: '',
      busType: ''
    };
  }

  selectSeats(busId: number) {
    console.log(`Selecting seats for bus ${busId}`);
  }
}
