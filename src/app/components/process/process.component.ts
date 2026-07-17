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
      title: 'Discover & Plan',
      description: 'We start by understanding your business, goals, and project requirements so we can recommend the best solution.',
      icon: Search
    },
    {
      title: 'Design & Prototype',
      description: 'We create wireframes and design concepts to give you a clear vision of your website or application before development begins.',
      icon: PenTool
    },
    {
      title: 'Develop & Test',
      description: 'We build your project using modern technologies while keeping you updated with regular progress throughout development.',
      icon: Code
    },
    {
      title: 'Launch & Support',
      description: 'After thorough testing, we launch your project and continue to provide support, updates, and improvements whenever you need them.',
      icon: Rocket
    }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}