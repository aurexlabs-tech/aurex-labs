import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, ArrowRight } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  readonly projects = [
    {
      title: 'EduCore Management Platform',
      description: 'A comprehensive school management system handling admissions, grading, and parent-teacher communications at scale.',
      tags: ['Angular', 'Node.js', 'MSSQL'],
      accent: '#2563EB',
      accentLight: 'rgba(37,99,235,0.15)',
      chartHeights: ['40%', '60%', '80%', '50%', '70%', '95%', '55%', '75%'],
      metric1: '15.2k',
      metric2: '99.1%',
      metricLabel1: 'Students',
      metricLabel2: 'Uptime'
    },
    {
      title: 'HealthSync Dashboard',
      description: 'An internal hospital administrative dashboard for real-time patient tracking and resource allocation.',
      tags: ['Angular', 'Express', 'MySQL'],
      accent: '#10b981',
      accentLight: 'rgba(16,185,129,0.15)',
      chartHeights: ['55%', '75%', '65%', '90%', '45%', '85%', '70%', '60%'],
      metric1: '3.8k',
      metric2: '97.5%',
      metricLabel1: 'Patients',
      metricLabel2: 'Accuracy'
    },
    {
      title: 'Aura E-Commerce Admin',
      description: 'A centralized inventory and order management platform for a high-volume direct-to-consumer brand.',
      tags: ['Angular', 'REST API', 'Tailwind'],
      accent: '#8b5cf6',
      accentLight: 'rgba(139,92,246,0.15)',
      chartHeights: ['70%', '50%', '85%', '60%', '95%', '45%', '80%', '65%'],
      metric1: '$2.4M',
      metric2: '12.5k',
      metricLabel1: 'Revenue',
      metricLabel2: 'Orders'
    },
    {
      title: 'Nexis AI Assistant',
      description: 'A custom LLM-powered support bot integrated directly into a client CRM to automate initial customer inquiries.',
      tags: ['Angular', 'AI Integration', 'Node.js'],
      accent: '#00D9FF',
      accentLight: 'rgba(0,217,255,0.15)',
      chartHeights: ['60%', '80%', '55%', '70%', '90%', '65%', '85%', '75%'],
      metric1: '40%',
      metric2: '24/7',
      metricLabel1: 'Reduction',
      metricLabel2: 'Uptime'
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}