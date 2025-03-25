import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight, Deal } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private mockFlights: Flight[] = [
    {
      id: 1,
      airline: 'IndiGo',
      flightNumber: '6E-123',
      departure: 'Delhi',
      arrival: 'Mumbai',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
      duration: '2h 00m',
      price: 3999,
      seats: 45,
      stops: 0,
      amenities: ['Meals', 'WiFi', 'Entertainment']
    },
    {
      id: 2,
      airline: 'Air India',
      flightNumber: 'AI-456',
      departure: 'Delhi',
      arrival: 'Mumbai',
      departureTime: '02:00 PM',
      arrivalTime: '04:15 PM',
      duration: '2h 15m',
      price: 4599,
      seats: 32,
      stops: 1,
      amenities: ['Meals', 'Extra Legroom']
    },
    {
      id: 3,
      airline: 'SpiceJet',
      flightNumber: 'SG-789',
      departure: 'Delhi',
      arrival: 'Mumbai',
      departureTime: '07:30 PM',
      arrivalTime: '09:40 PM',
      duration: '2h 10m',
      price: 3499,
      seats: 28,
      stops: 0,
      amenities: ['Meals']
    }
  ];

  private deals: Deal[] = [
    {
      id: 1,
      title: 'Early Bird Discount',
      description: 'Book 30 days in advance and get 15% off',
      discount: 15,
      validUntil: '2025-03-31'
    },
    {
      id: 2,
      title: 'Student Special',
      description: 'Show your student ID and get 10% off',
      discount: 10,
      validUntil: '2025-12-31'
    }
  ];

  searchFlights(): Observable<Flight[]> {
    return of(this.mockFlights);
  }

  getFlightById(id: number): Observable<Flight | undefined> {
    return of(this.mockFlights.find(flight => flight.id === id));
  }

  getDeals(): Observable<Deal[]> {
    return of(this.deals);
  }

  bookFlight(flightId: number, bookingDetails: any): Observable<string> {
    const referenceId = 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase();
    return of(referenceId);
  }
}