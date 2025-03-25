import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminaddcity',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './adminaddcity.component.html',
  styleUrl: './adminaddcity.component.css',
})
export class AdminaddcityComponent {
  cityName: string = '';
  message: string | null = null;

  constructor(private apiService: ApiService) {}

  addCity(): void {
    if (this.cityName.trim() !== '') {
      this.apiService.addCity(this.cityName).subscribe(
        (response) => {
          this.message = 'City added successfully!';
          this.cityName = '';
        },
        (error) => {
          this.message = 'Error adding city. Please try again!';
        }
      );
    }
  }
}
