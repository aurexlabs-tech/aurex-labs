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
      spanClass: 'md:col-span-2 lg:col-span-2' // Large Card
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable internal tools and resource planning systems designed for operations.',
      icon: Building,
      spanClass: 'md:col-span-1 lg:col-span-1' // Standard Card
    },
    {
      title: 'Backend APIs',
      description: 'Secure, lightning-fast RESTful APIs and database architectures using Node.js and MySQL.',
      icon: Network,
      spanClass: 'md:col-span-1 lg:col-span-1' // Standard Card
    },
    {
      title: 'AI Tool Integrations',
      description: 'Implementing LLMs, automated support bots, and intelligent workflow automations to modernize and accelerate your business processes.',
      icon: Bot,
      spanClass: 'md:col-span-2 lg:col-span-2' // Large Card
    },
    {
      title: 'Admin Dashboard Systems',
      description: 'Intuitive, data-rich analytical dashboards allowing you to monitor and manage your business metrics in real-time with granular controls.',
      icon: LayoutDashboard,
      spanClass: 'md:col-span-2 lg:col-span-2' // Large Card
    },
    {
      title: 'Premium Websites',
      description: 'Lightning-fast, SEO-optimized digital storefronts that convert visitors.',
      icon: Globe,
      spanClass: 'md:col-span-1 lg:col-span-1' // Standard Card
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}