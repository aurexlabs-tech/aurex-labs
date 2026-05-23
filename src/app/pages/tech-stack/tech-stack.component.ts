import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Database, Server, Cpu, Code2, Network, BrainCircuit, Building2, Blocks } from 'lucide-angular';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  // Renamed slightly to focus on business capability
  readonly technologies = [
    { name: 'Angular Framework', icon: Code2 },
    { name: 'Node.js Backend', icon: Server },
    { name: 'Express APIs', icon: Blocks },
    { name: 'Relational Databases', icon: Database },
    { name: 'REST Architecture', icon: Network },
    { name: 'Enterprise Scale', icon: Building2 },
    { name: 'AI Models', icon: BrainCircuit },
    { name: 'Cloud Systems', icon: Cpu },
  ];
}