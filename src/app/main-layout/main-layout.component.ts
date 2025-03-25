import { Component } from '@angular/core';
import { AboutUsComponent } from "../Component/about-us/about-us.component";
import { PopularDestinationsComponent } from "../Component/popular-destinations/popular-destinations.component";
import { FlightDealsComponent } from "../Component/flight-deals/flight-deals.component";
import { TravelExperienceComponent } from "../Component/travel-experience/travel-experience.component";
import { TestimonialsComponent } from "../Component/testimonials/testimonials.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { FlightListComponent } from "../Component/flight-list/flight-list.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../layout/header/header.component";

@Component({
  selector: 'app-main-layout',
  imports: [
    AboutUsComponent,
    PopularDestinationsComponent,
    TravelExperienceComponent,
    TestimonialsComponent,
    FooterComponent,
    FlightListComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderComponent
],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  from: string = '';
  to: string = '';
  departureDate: string = '';
}
