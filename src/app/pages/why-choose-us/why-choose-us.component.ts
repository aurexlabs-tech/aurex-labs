import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Zap, Layers, Cpu, CreditCard, Clock, Gauge } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent implements OnInit {
  readonly benefits = [
    {
      title: 'Fast Communication',
      description: 'Direct access to the core developers. No account managers, no red tape. Just swift, transparent updates.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Systems built with modularity in mind, ensuring your software grows seamlessly alongside your user base.',
      icon: Layers
    },
    {
      title: 'Modern Technology Stack',
      description: 'Leveraging the latest in Angular and Node.js to provide enterprise-grade security and performance.',
      icon: Cpu
    },
    {
      title: 'Startup-Friendly Pricing',
      description: 'Premium agency quality without the bloated overhead, structured to support growing businesses.',
      icon: CreditCard
    },
    {
      title: 'Long-Term Support',
      description: 'We offer continuous maintenance and iterative upgrades long after the initial deployment.',
      icon: Clock
    },
    {
      title: 'Performance-Focused',
      description: 'Obsessive optimization for load times, database queries, and seamless user experiences.',
      icon: Gauge
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}