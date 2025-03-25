import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FlightListComponent } from './Component/flight-list/flight-list.component';
import { FlightDetailComponent } from './Component/flight-detail.component';
import { LoginComponent } from './Auth/login.component';
import { SignupComponent } from './Auth/signup.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { AddFlightComponent } from './admin/add-flight.component';
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { AdminaddcityComponent } from './admin/adminaddcity/adminaddcity.component';
import { CheckinComponent } from './Component/checkin/checkin.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent },
  { path: 'flights', component: FlightListComponent },
  { path: 'flight/:id', component: FlightDetailComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/bookings', component: AdminBookingsComponent },
  { path: 'admin/add-flight', component: AddFlightComponent },
  { path: 'addcity', component: AdminaddcityComponent },
  { path: '**', redirectTo: '' },
];
