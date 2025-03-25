import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-2 bg-dark min-vh-100 p-0">
          <div class="d-flex flex-column p-3 text-white">
            <span class="fs-4 mb-4">Admin Panel</span>
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin']"
                  [routerLinkActiveOptions]="{ exact: true }"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-speedometer2 me-2"></i>
                  Dashboard
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin/bookings']"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-calendar-check me-2"></i>
                  Bookings
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin/addcity']"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-plus-circle me-2"></i>
                  Add City
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  [routerLink]="['/admin/add-flight']"
                  routerLinkActive="active"
                  class="nav-link text-white"
                >
                  <i class="bi bi-plus-circle me-2"></i>
                  Add Flight
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Main Content -->
        <div class="col-md-10 p-4">
          <div class="row">
            <div class="col-md-3 mb-4">
              <div class="card bg-warning text-white">
                <div class="card-body">
                  <h5 class="card-title">Total Bookings</h5>
                  <p class="card-text h2">156</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card bg-success text-white">
                <div class="card-body">
                  <h5 class="card-title">Revenue</h5>
                  <p class="card-text h2">$45,690</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card bg-info text-white">
                <div class="card-body">
                  <h5 class="card-title">Active Flights</h5>
                  <p class="card-text h2">24</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card bg-warning text-white">
                <div class="card-body">
                  <h5 class="card-title">Users</h5>
                  <p class="card-text h2">1,203</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Recent Bookings</h5>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Customer</th>
                        <th>Flight</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr *ngFor="let booking of recentBookings">
                        <td>{{ booking.id }}</td>
                        <td>{{ booking.customer }}</td>
                        <td>{{ booking.flight }}</td>
                        <td>{{ booking.date }}</td>
                        <td>
                          <span [class]="'badge ' + booking.statusClass">{{
                            booking.status
                          }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Popular Routes</h5>
                  <div class="list-group">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action"
                      *ngFor="let route of popularRoutes"
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">{{ route.from }} → {{ route.to }}</h6>
                        <small>{{ route.bookings }} bookings</small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AdminDashboardComponent {
  recentBookings = [
    {
      id: 'B001',
      customer: 'John Doe',
      flight: 'NY-LA',
      date: '2025-01-15',
      status: 'Confirmed',
      statusClass: 'bg-success',
    },
    {
      id: 'B002',
      customer: 'Jane Smith',
      flight: 'LA-CHI',
      date: '2025-01-16',
      status: 'Pending',
      statusClass: 'bg-warning',
    },
    {
      id: 'B003',
      customer: 'Mike Johnson',
      flight: 'MIA-NY',
      date: '2025-01-17',
      status: 'Confirmed',
      statusClass: 'bg-success',
    },
    {
      id: 'B004',
      customer: 'Sarah Wilson',
      flight: 'SF-SEA',
      date: '2025-01-18',
      status: 'Cancelled',
      statusClass: 'bg-warning',
    },
  ];

  popularRoutes = [
    { from: 'New York', to: 'Los Angeles', bookings: 245 },
    { from: 'Chicago', to: 'Miami', bookings: 189 },
    { from: 'San Francisco', to: 'Seattle', bookings: 156 },
    { from: 'Boston', to: 'Washington DC', bookings: 134 },
  ];
}
