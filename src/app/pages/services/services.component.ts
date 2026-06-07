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
  readonly services = [
    {
      title: 'Web Application Development',
      description: 'Custom, high-performance web applications built from the ground up using Angular and modern backend frameworks to handle complex business logic.',
      icon: MonitorPlay,
      flexClass: 'w-full md:w-full lg:w-[calc(66.666%-0.5rem)]' // Large Card
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable internal tools and resource planning systems designed for operations.',
      icon: Building,
      flexClass: 'w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]' // Standard Card
    },
    {
      title: 'Backend APIs',
      description: 'Secure, lightning-fast RESTful APIs and database architectures using Node.js and MySQL.',
      icon: Network,
      flexClass: 'w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]' // Standard Card
    },
    {
      title: 'AI Tool Integrations',
      description: 'Implementing LLMs, automated support bots, and intelligent workflow automations to modernize and accelerate your business processes.',
      icon: Bot,
      flexClass: 'w-full md:w-full lg:w-[calc(66.666%-0.5rem)]' // Large Card
    },
    {
      title: 'Admin Dashboard Systems',
      description: 'Intuitive, data-rich analytical dashboards allowing you to monitor and manage your business metrics in real-time with granular controls.',
      icon: LayoutDashboard,
      flexClass: 'w-full md:w-full lg:w-[calc(66.666%-0.5rem)]' // Large Card
    },
    {
      title: 'Premium Websites',
      description: 'Lightning-fast, SEO-optimized digital storefronts that convert visitors.',
      icon: Globe,
      flexClass: 'w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]' // Standard Card
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}