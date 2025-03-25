import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css'],
})
export class AdminBookingsComponent {
  searchTerm: string = '';
  statusFilter: string = '';

  bookings = [
    {
      id: 'B001',
      customerName: 'John Doe',
      flightNumber: 'AA123',
      route: 'New York → Los Angeles',
      date: '2025-01-15',
      amount: 299,
      status: 'Confirmed',
      statusClass: 'bg-success',
    },
    {
      id: 'B002',
      customerName: 'Jane Smith',
      flightNumber: 'DL456',
      route: 'Chicago → Miami',
      date: '2025-01-16',
      amount: 349,
      status: 'Pending',
      statusClass: 'bg-warning',
    },
    {
      id: 'B003',
      customerName: 'Mike Johnson',
      flightNumber: 'UA789',
      route: 'San Francisco → Seattle',
      date: '2025-01-17',
      amount: 199,
      status: 'Confirmed',
      statusClass: 'bg-success',
    },
    {
      id: 'B004',
      customerName: 'Sarah Wilson',
      flightNumber: 'AA456',
      route: 'Boston → Washington DC',
      date: '2025-01-18',
      amount: 249,
      status: 'Cancelled',
      statusClass: 'bg-warning',
    },
  ];

  filteredBookings() {
    return this.bookings.filter((booking) => {
      const matchesSearch =
        booking.customerName
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        booking.flightNumber
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      const matchesStatus =
        !this.statusFilter || booking.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  viewDetails(id: string) {
    console.log('View details for booking:', id);
    // Add navigation logic here if needed
  }

  cancelBooking(id: string) {
    if (confirm('Are you sure you want to cancel this booking?')) {
      const index = this.bookings.findIndex((b) => b.id === id);
      if (index !== -1) {
        this.bookings[index].status = 'Cancelled';
        this.bookings[index].statusClass = 'bg-warning';
      }
    }
  }
}
