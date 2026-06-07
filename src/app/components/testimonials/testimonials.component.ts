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
      quote: "AurexLabs completely transformed our internal operations. The custom dashboard they built using Angular is incredibly fast and intuitive. Highly professional team.",
      name: "Sri Ram",
      role: "CEO, StarVibes Studio",
      initials: "SR"
    },
    {
      quote: "Finding developers who actually understand business constraints is rare. They delivered a scalable E-commerce backend right on schedule.",
      name: "Marcus Thorne",
      role: "Founder, Aura Brand",
      initials: "MT"
    },
    {
      quote: "The AI support integration they implemented reduced our manual ticket load by 40%. Their code quality and communication are top-tier.",
      name: "David Chen",
      role: "CTO, Nexis Tech",
      initials: "DC"
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}