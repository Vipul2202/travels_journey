import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-experience.component.html',
  styleUrl: './travel-experience.component.css',
})
export class TravelExperienceComponent {
  experiences = [
    {
      name: 'Exploring Cabin Options',
      text: 'We are dedicated to...',
      img: '/assets/Images/a-a.jpg',
    },
    {
      name: 'Exploring The World Of Print',
      text: 'Transforming air travel...',
      img: '/assets/Images/a-a.jpg',
    },
    {
      name: 'Exploring The World Of Print',
      text: 'Transforming air travel...',
      img: '/assets/Images/a-a.jpg',
    },
  
  ];
}
