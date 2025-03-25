import { Component } from '@angular/core';
import { HeroSectionComponent } from '../Component/hero-section/hero-section.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { AboutUsComponent } from '../Component/about-us/about-us.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { Herosection2Component } from '../Component/herosection2/herosection2.component';
import { FlightSearchPageComponent } from '../flight-search-page/flight-search-page.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [NavbarComponent,HeroSectionComponent,AboutUsComponent,FooterComponent,Herosection2Component,FlightSearchPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
