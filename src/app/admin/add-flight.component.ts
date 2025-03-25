import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-2 bg-dark min-vh-100 p-0">
          <div class="d-flex flex-column p-3 text-white">
            <span class="fs-4 mb-4">Admin Panel</span>
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin']"
                  [routerLinkActiveOptions]="{ exact: true }"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-speedometer2 me-2"></i>
                  Dashboard
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin/bookings']"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-calendar-check me-2"></i>
                  Bookings
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin/addcity']"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-plus-circle me-2"></i>
                  Add City
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin/add-flight']"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-plus-circle me-2"></i>
                  Add Flight
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-md-10 p-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title mb-4">Add New Flight</h5>
              <form (ngSubmit)="onSubmit()">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Flight Number</label>
                    <input
                      type="text"
                      class="form-control"
                      [(ngModel)]="flight.flightNumber"
                      name="flightNumber"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Airline</label>
                    <select
                      class="form-select"
                      [(ngModel)]="flight.airline"
                      name="airline"
                      required
                    >
                      <option value="">Select Airline</option>
                      <option
                        *ngFor="let airline of airlines"
                        [value]="airline"
                      >
                        {{ airline }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Origin</label>
                    <input
                      type="text"
                      class="form-control"
                      [(ngModel)]="flight.origin"
                      name="origin"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Destination</label>
                    <input
                      type="text"
                      class="form-control"
                      [(ngModel)]="flight.destination"
                      name="destination"
                      required
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Departure Date & Time</label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      [(ngModel)]="flight.departureTime"
                      name="departureTime"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Arrival Date & Time</label>
                    <input
                      type="datetime-local"
                      class="form-control"
                      [(ngModel)]="flight.arrivalTime"
                      name="arrivalTime"
                      required
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label class="form-label">Base Price</label>
                    <div class="input-group">
                      <span class="input-group-text">$</span>
                      <input
                        type="number"
                        class="form-control"
                        [(ngModel)]="flight.basePrice"
                        name="basePrice"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label">Total Seats</label>
                    <input
                      type="number"
                      class="form-control"
                      [(ngModel)]="flight.totalSeats"
                      name="totalSeats"
                      required
                    />
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label">Aircraft Type</label>
                    <input
                      type="text"
                      class="form-control"
                      [(ngModel)]="flight.aircraftType"
                      name="aircraftType"
                      required
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="active"
                      [(ngModel)]="flight.active"
                      name="active"
                    />
                    <label class="form-check-label" for="active"
                      >Flight Active</label
                    >
                  </div>
                </div>

                <div class="d-flex gap-2">
                  <button type="submit" class="btn btn-warning">
                    Add Flight
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    (click)="resetForm()"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AddFlightComponent {
  airlines = [
    'American Airlines',
    'Delta',
    'United',
    'Southwest',
    'JetBlue',
    'Alaska Airlines',
  ];

  flight = {
    flightNumber: '',
    airline: '',
    origin: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    basePrice: null,
    totalSeats: null,
    aircraftType: '',
    active: true,
  };

  onSubmit() {
    console.log('Adding new flight:', this.flight);
    // Here you would typically make an API call to save the flight
    alert('Flight added successfully!');
    this.resetForm();
  }

  resetForm() {
    this.flight = {
      flightNumber: '',
      airline: '',
      origin: '',
      destination: '',
      departureTime: '',
      arrivalTime: '',
      basePrice: null,
      totalSeats: null,
      aircraftType: '',
      active: true,
    };
  }
}
