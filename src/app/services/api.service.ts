import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Available throughout the app
})
export class ApiService {
  private baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  // Add a city (for users)
  addCity(cityName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/add_city`, { name: cityName });
  }
  loginAdmin(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Admin Signup API Call
  signupAdmin(data: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
  // Get all cities
  getCities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/cities`);
  }
}
