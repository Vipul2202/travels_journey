import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Available globally
})
export class AdminApiService {
  private adminBaseUrl = 'http://localhost/admin/api'; // Admin API Base URL

  constructor(private http: HttpClient) {}

  // Add a city (for admin)
  addAdminCity(cityName: string): Observable<any> {
    return this.http.post(`${this.adminBaseUrl}/add_city`, { name: cityName });
  }

  // Get all cities (admin view)
  getAdminCities(): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/cities`);
  }

  // Delete a city (admin only)
  deleteAdminCity(cityId: number): Observable<any> {
    return this.http.delete(`${this.adminBaseUrl}/delete_city/${cityId}`);
  }
}
