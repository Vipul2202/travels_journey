
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface FlightLeg {
  id: number;
  origin: string;
  destination: string;
  departDate?: Date;
}

@Component({
  selector: 'app-flight-search-component',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './flight-search-component.component.html',
  styleUrl: './flight-search-component.component.css',
})
export class FlightSearchComponent {
  flightType: string = 'roundtrip';
  origin: string = '';
  destination: string = '';
  departDate?: Date;
  returnDate?: Date;
  passengers: number = 1;
  flightLegs: FlightLeg[] = [
    { id: 1, origin: '', destination: '', departDate: undefined },
    { id: 2, origin: '', destination: '', departDate: undefined },
  ];

  constructor(private router: Router, private toastr: ToastrService) {}

  handleSearch(): void {
    if (this.flightType === 'roundtrip' || this.flightType === 'oneway') {
      if (!this.origin || !this.destination || !this.departDate) {
        this.toastr.error('Please fill in all required fields');
        return;
      }
      if (this.flightType === 'roundtrip' && !this.returnDate) {
        this.toastr.error('Please select a return date');
        return;
      }
    } else if (this.flightType === 'multicity') {
      if (
        this.flightLegs.some(
          (leg) => !leg.origin || !leg.destination || !leg.departDate
        )
      ) {
        this.toastr.error('Please fill in all fields for each flight leg');
        return;
      }
    }

    this.router.navigate(['/flights'], {
      state: {
        flightType: this.flightType,
        origin: this.flightType === 'multicity' ? null : this.origin,
        destination: this.flightType === 'multicity' ? null : this.destination,
        departDate: this.flightType === 'multicity' ? null : this.departDate,
        returnDate: this.flightType === 'roundtrip' ? this.returnDate : null,
        passengers: this.passengers,
        flightLegs: this.flightType === 'multicity' ? this.flightLegs : null,
      },
    });

    this.toastr.success('Searching for flights...');
  }

  addFlightLeg(): void {
    const newId =
      this.flightLegs.length > 0
        ? Math.max(...this.flightLegs.map((leg) => leg.id)) + 1
        : 1;
    this.flightLegs.push({
      id: newId,
      origin: '',
      destination: '',
      departDate: undefined,
    });
  }

  removeFlightLeg(id: number): void {
    if (this.flightLegs.length <= 2) {
      this.toastr.error(
        'You need at least 2 flight legs for multi-city search'
      );
      return;
    }
    this.flightLegs = this.flightLegs.filter((leg) => leg.id !== id);
  }
}
