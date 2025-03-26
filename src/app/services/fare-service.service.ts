import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServicefare {
  private adminBaseUrl = 'http://localhost:5003/api';

  constructor(private http: HttpClient) {}
  addFare(fareData: {
    flightId: number;
    baseFare: number;
    cityCharges: number;
    tax: number;
  }): Observable<any> {
    return this.http.post(
      `${this.adminBaseUrl}/FareControllers/admin/addfare`,
      fareData
    );
  }

  updateBaseFare(flightId: number, baseFare: number): Observable<any> {
    return this.http.put(
      `${this.adminBaseUrl}/FareControllers/admin/updatebasefare/${flightId}/${baseFare}`,
      {}
    );
  }

  updateTax(flightId: number, tax: number): Observable<any> {
    return this.http.put(
      `${this.adminBaseUrl}/FareControllers/admin/updatetax/${flightId}/${tax}`,
      {}
    );
  }

  getAllFares(): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/FareControllers/all`);
  }

  getFareById(id: number): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/FareControllers/id/${id}`);
  }


}
