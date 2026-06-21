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
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}