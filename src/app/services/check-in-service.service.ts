import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private adminBaseUrl = 'http://localhost:5010/api';

  constructor(private http: HttpClient) {}
  checkIn(referenceID: string): Observable<any> {
    return this.http.post(
      `${this.adminBaseUrl}/CheckIn/checkin/${referenceID}`,
      {}
    );
  }

  getCheckInDetails(id: string): Observable<any> {
    return this.http.get(`${this.adminBaseUrl}/CheckIn/details/${id}`);
  }
}
