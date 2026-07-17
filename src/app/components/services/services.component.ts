import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MonitorPlay, Building, Network, Bot, LayoutDashboard, Globe, ArrowRight } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  readonly ArrowRight = ArrowRight;
  readonly services = [
    {
      title: 'Custom Websites',
      description: 'Professional, responsive websites that showcase your business and help turn visitors into customers.',
      icon: MonitorPlay,
      flexClass: 'w-full md:w-full lg:w-[calc(66.666%-0.5rem)]' // Large Card
    },
    {
      title: 'Web Applications',
      description: 'Custom web applications built to streamline your business processes and improve productivity.',
      icon: Building,
      flexClass: 'w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]' // Standard Card
    },
    {
      title: 'Admin Dashboards',
      description: 'Manage your business with secure dashboards, reports, and real-time insights tailored to your needs.',
      icon: Network,
      flexClass: 'w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]' // Standard Card
    },
    {
      title: 'AI & System Integrations',
      description: 'Connect your website or application with AI tools, payment gateways, CRMs, email services, and other business platforms.',
      icon: Bot,
      flexClass: 'w-full md:w-full lg:w-[calc(66.666%-0.5rem)]' // Large Card
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}