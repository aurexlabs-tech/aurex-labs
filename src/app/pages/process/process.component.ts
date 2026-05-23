import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, PenTool, Code, Rocket } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent implements OnInit {
  readonly steps = [
    {
      title: 'Discover & Architect',
      description: 'We analyze your business requirements, define technical constraints, and architect a scalable database and system foundation.',
      icon: Search
    },
    {
      title: 'Design & Prototype',
      description: 'Creating high-fidelity UI/UX wireframes and interactive prototypes, ensuring the platform is intuitive before coding begins.',
      icon: PenTool
    },
    {
      title: 'Develop & Iterate',
      description: 'Agile engineering using Angular and Node.js. We build robust APIs, secure backends, and responsive frontend interfaces.',
      icon: Code
    },
    {
      title: 'Deploy & Scale',
      description: 'Rigorous testing followed by seamless deployment. We provide ongoing support to ensure your product scales with your users.',
      icon: Rocket
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}