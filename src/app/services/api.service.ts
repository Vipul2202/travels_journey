import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5002/api';

  constructor(private http: HttpClient) {}

  loginAdmin(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/Auth/login`, credentials);
  }

  signupAdmin(data: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/Auth/register`, data);
  }
  getUserDetail(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Auth/getuserdetails`);
  }
}
