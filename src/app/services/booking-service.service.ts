import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceBooking {
  private adminBaseUrl = 'http://localhost:5004/api';

  constructor(private http: HttpClient) {}
  bookTickets(ticketData: {
    flightId: number;
    from: string;
    to: string;
    gender: string;
    fullName: string;
    phoneNumber: string;
    email: string;
  }): Observable<any> {
    return this.http.post(
      `${this.adminBaseUrl}/BookingControllers/booktickets`,
      ticketData
    );
  }

  getAllBookings(): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/BookingControllers/admin/all`);
  }

  cancelBooking(id: string): Observable<any> {
    return this.http.delete(
      `${this.adminBaseUrl}/BookingControllers/cancel/${id}`
    );
  }

  getBookingDetails(id: string): Observable<any> {
    return this.http.get(
      `${this.adminBaseUrl}/BookingControllers/booking/${id}`
    );
  }
}
