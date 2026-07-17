import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  readonly reviews = [
    {
      quote: "Working with AurexLabs was a great experience. They understood our requirements, communicated clearly throughout the project, and delivered a modern website that represents our brand perfectly. We're very happy with the final result",
      name: "Sri Ram",
      role: "Founder, Star Vibes Studio",
      initials: "SR"
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}