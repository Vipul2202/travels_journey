import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiServiceCity } from '../../services/city-service.service';

@Component({
  selector: 'app-adminaddcity',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './adminaddcity.component.html',
  styleUrl: './adminaddcity.component.css',
})
export class AdminaddcityComponent {
  cityName: string = '';
  cityCode: string = '';
  state: string = '';
  cityCharges: number | null = null;
  airportName: string = '';
  message: string | null = null;
  loading: boolean = false;

  constructor(private apiService: ApiServiceCity) {}

  addCity(): void {
    // ✅ Form validation
    if (
      !this.cityName.trim() ||
      !this.cityCode.trim() ||
      !this.state.trim() ||
      !this.airportName.trim()
    ) {
      this.message = 'All fields are required!';
      return;
    }

    if (this.cityCharges === null || this.cityCharges < 0) {
      this.message = 'City charges must be a valid positive number!';
      return;
    }

    this.loading = true; // Show loading indicator

    // ✅ Prepare city data dynamically
    const cityData = {
      cityCode: this.cityCode,
      cityName: this.cityName,
      state: this.state,
      cityCharges: this.cityCharges,
      airportName: this.airportName,
    };

    this.apiService.addAdminCity(cityData).subscribe({
      next: () => {
        this.message = '✅ City added successfully!';
        this.resetForm();
      },
      error: (error) => {
        this.message = `❌ Error: ${
          error.error?.message || 'Failed to add city'
        }`;
        this.loading = false;
      },
    });
  }

  // ✅ Reset form after success
  resetForm(): void {
    this.cityName = '';
    this.cityCode = '';
    this.state = '';
    this.cityCharges = null;
    this.airportName = '';
    this.loading = false;
  }
}
