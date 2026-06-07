import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ExternalLink, ArrowRight, Clapperboard, CakeSlice, HeartPulse, CircleCheck } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  @Input() limit?: number;
  @Input() showHeader: boolean = true;

  // Lucide icon references for template binding
  readonly ClapperboardIcon = Clapperboard;
  readonly CakeSliceIcon = CakeSlice;
  readonly HeartPulseIcon = HeartPulse;
  readonly ExternalLinkIcon = ExternalLink;
  readonly CircleCheckIcon = CircleCheck;
  readonly ArrowRightIcon = ArrowRight;

  readonly allProjects = [
    {
      title: 'Star Vibes Studio',
      problem: 'The client required a premium, high-performance visual experience to capture leads and showcase their cinematic portfolio.',
      solution: 'Engineered a modern, highly visual frontend architecture optimized for asset delivery and smooth performance.',
      impact: 'Delivered a deeply immersive user journey that maximizes lead generation and premium studio bookings.',
      tags: ['Angular', 'Cinematic UI', 'Lead Generation'],
      imageUrl: 'assets/img/projects/star-vibes.png',
    },
    {
      title: 'Lisa Bakes E-Commerce',
      problem: 'A growing digital bakery needed a scalable storefront with streamlined inventory management and checkout flows.',
      solution: 'Built a full-stack e-commerce environment with a strict Git version control setup for continuous, reliable deployment.',
      impact: 'Modernized the checkout flow, significantly reducing cart abandonment and streamlining the daily fulfillment of orders.',
      tags: ['Angular', 'E-commerce', 'Git Workflow'],
      imageUrl: 'assets/img/projects/lisa-bakes.png',
    }
  ];

  get displayedProjects() {
    return this.limit ? this.allProjects.slice(0, this.limit) : this.allProjects;
  }

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}