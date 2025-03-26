import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceFlight {
  private adminBaseUrl = 'http://localhost:5004/api';

  constructor(private http: HttpClient) {}
  addFlight(flightData: {
    flightNumber: number;
    name: string;
    from: string;
    to: string;
    departureTime: string;
    arrivalTime: string;
    totalHours: number;
    totalSeates: number;
    serviceStandard: number;
    isActive: boolean;
    baseFare: number;
    tax: number;
  }): Observable<any> {
    return this.http.post(
      `${this.adminBaseUrl}/Flight/admin/addFlight`,
      flightData
    );
  }

  addSeats(flightId: number, qty: number): Observable<any> {
    return this.http.put(
      `${this.adminBaseUrl}/Flight/admin/addSeats/${flightId}/${qty}`,
      {}
    );
  }

  removeSeats(seatData: { flightId: number; qty: number }): Observable<any> {
    return this.http.patch(`${this.adminBaseUrl}/Flight/removeSeats`, seatData);
  }

  abortFlight(flightId: number): Observable<any> {
    return this.http.put(
      `${this.adminBaseUrl}/Flight/admin/abort/${flightId}`,
      {}
    );
  }

  activateFlight(flightId: number): Observable<any> {
    return this.http.put(
      `${this.adminBaseUrl}/Flight/admin/activate/${flightId}`,
      {}
    );
  }

  updateFlightName(flightId: number, name: string): Observable<any> {
    return this.http.put(
      `${this.adminBaseUrl}/Flight/admin/updateflightname/${flightId}/${name}`,
      {}
    );
  }

  searchFlights(from: string, to: string): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/Flight/search/${from}/${to}`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/Flight/all`);
  }

  getFlightById(id: number): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/Flight/id/${id}`);
  }
}
