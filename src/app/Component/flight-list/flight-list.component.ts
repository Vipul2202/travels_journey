import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Flight } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ],
  templateUrl: './flight-list.component.html',
  styleUrl: './flight-list.component.css',
})
export class FlightListComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.loadFlights();
  }

  // In flight-list.component.ts
  loadFlights(): void {
    this.flightService.searchFlights().subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('Error loading flights', err);
      },
    });
  }
}
