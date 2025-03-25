import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private adminBaseUrl = 'http://localhost:5007/api';

  constructor(private http: HttpClient) {}
  // Add a city (for admin)
  addAdminCity(city: {
    cityCode: string;
    cityName: string;
    state: string;
    cityCharges: number;
    airportName: string;
  }): Observable<any> {
    return this.http.post(
      `${this.adminBaseUrl}/CityControllers/admin/registerCity`,
      city
    );
  }
  updateAdminCity(city: {
    id: number;
    cityCharges: number;
    airportName: string;
  }): Observable<any> {
    return this.http.post(
      `${this.adminBaseUrl}/CityControllers/admin/updatecitydetails`,
      city
    );
  }

  // Get all cities (admin view)
  getAdminCities(): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/CityControllers/all`);
  }

  // Delete a city (admin only)
  deleteAdminCity(cityId: number): Observable<any> {
    return this.http.delete(
      `${this.adminBaseUrl}/CityControllers/admin/${cityId}`
    );
  }

  searchCity(cityName: string): Observable<any> {
    return this.http.get(
      `${this.adminBaseUrl}/CityControllers/search/${cityName}`
    );
  }

  searchCities(city1: string, city2: string): Observable<any> {
    return this.http.get(
      `${this.adminBaseUrl}/CityControllers/searchcities/${city1}/${city2}`
    );
  }
  
}
