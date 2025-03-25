import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../services/flight.service';
import { Flight, BookingDetails } from '../models/flight.model';
import { HeaderComponent } from "../layout/header/header.component";
import { FooterComponent } from "../layout/footer/footer.component";

@Component({
  selector: 'app-flight-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  template: `
  <app-header/>
    <div class="container my-5" *ngIf="flight">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">
            {{ flight.airline }} - {{ flight.flightNumber }}
          </h2>
          <div class="row mt-4">
            <div class="col-md-4">
              <h5>Departure</h5>
              <p class="h3">{{ flight.departureTime }}</p>
              <p>{{ flight.departure }}</p>
            </div>
            <div class="col-md-4 text-center">
              <h5>Duration</h5>
              <p>{{ flight.duration }}</p>
              <p>{{ flight.stops }} stop(s)</p>
            </div>
            <div class="col-md-4 text-end">
              <h5>Arrival</h5>
              <p class="h3">{{ flight.arrivalTime }}</p>
              <p>{{ flight.arrival }}</p>
            </div>
          </div>

          <hr />

          <div class="row mt-3">
            <div class="col-md-6">
              <h5>Amenities</h5>
              <ul class="list-unstyled">
                <li *ngFor="let amenity of flight.amenities">
                  <i class="bi bi-check-circle-fill text-success"></i>
                  {{ amenity }}
                </li>
              </ul>
            </div>
            <div class="col-md-6 text-end">
              <div class="price mb-3">₹{{ flight.price }}</div>
              <button
                class="btn btn-warning btn-lg"
                (click)="showBookingModal = true"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <div
      class="modal"
      [class.show]="showBookingModal"
      [style.display]="showBookingModal ? 'block' : 'none'"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Book Flight</h5>
            <button
              type="button"
              class="btn-close"
              (click)="showBookingModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label class="form-label">Passenger Name</label>
                <input
                  type="text"
                  class="form-control"
                  [(ngModel)]="bookingDetails.passengerName"
                  name="passengerName"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  [(ngModel)]="bookingDetails.email"
                  name="email"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  [(ngModel)]="bookingDetails.phone"
                  name="phone"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Number of Passengers</label>
                <input
                  type="number"
                  class="form-control"
                  [(ngModel)]="bookingDetails.passengers"
                  name="passengers"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              (click)="showBookingModal = false"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-warning"
              (click)="bookFlight()"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div
      class="modal"
      [class.show]="showSuccessModal"
      [style.display]="showSuccessModal ? 'block' : 'none'"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Booking Confirmed!</h5>
            <button
              type="button"
              class="btn-close"
              (click)="showSuccessModal = false"
            ></button>
          </div>
          <div class="modal-body">
            <p>Your flight has been successfully booked.</p>
            <p>
              Booking Reference: <strong>{{ bookingReference }}</strong>
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
              (click)="showSuccessModal = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Backdrop -->
    <div
      class="modal-backdrop fade show"
      *ngIf="showBookingModal || showSuccessModal"
    ></div>
    <app-footer/>
  `,
})
export class FlightDetailComponent implements OnInit {
  flight?: Flight;
  showBookingModal = false;
  showSuccessModal = false;
  bookingReference = '';
  bookingDetails: BookingDetails = {
    passengerName: '',
    email: '',
    phone: '',
    passengers: 1,
  };

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flightService.getFlightById(id).subscribe((flight) => {
      this.flight = flight;
    });
  }

  bookFlight() {
    if (this.flight) {
      this.flightService
        .bookFlight(this.flight.id, this.bookingDetails)
        .subscribe((reference) => {
          this.bookingReference = reference;
          this.showBookingModal = false;
          this.showSuccessModal = true;
        });
    }
  }
}
