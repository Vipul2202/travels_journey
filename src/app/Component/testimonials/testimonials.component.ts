import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Bhanu Pratap',
      text: 'Creativity is a subject where many people...',
      img: '/assets/Images/a-a.jpg',
    },
    {
      name: 'Chandan Kushwaha',
      text: 'Great experience, highly recommend!',
      img: '/assets/Images/a-a.jpg',
    },
    {
      name: 'Vipul taneja',
      text: 'Great experience, highly recommend!',
      img: '/assets/Images/a-a.jpg',
    },
  ];
}
