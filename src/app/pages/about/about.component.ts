import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Layers, Cpu, Zap, Clock, Smartphone, Network } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutUsComponent implements OnInit {
  readonly highlights = [
    { text: 'Modern Tech Stack', icon: Layers },
    { text: 'Scalable Architecture', icon: Cpu },
    { text: 'Fast Development', icon: Zap },
    { text: 'Long-Term Support', icon: Clock },
    { text: 'Responsive UI/UX', icon: Smartphone },
    { text: 'API & AI Integrations', icon: Network }
  ];

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}