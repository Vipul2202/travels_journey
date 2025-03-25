import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.css',
})
export class CheckinComponent {
  referenceId: string = '';
  checkInId: string | null = null;

  checkIn(): void {
    if (this.referenceId.trim() !== '') {
      this.checkInId = 'CHK-' + Math.floor(Math.random() * 100000);
    }
  }
}
