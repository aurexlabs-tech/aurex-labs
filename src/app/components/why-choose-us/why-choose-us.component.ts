import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowUpRight, Zap, ShieldCheck, Cpu, Code2, Clock, Gauge } from 'lucide-angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent implements OnInit {
  // Icon for the interactive CTA button
  readonly ArrowUpRight = ArrowUpRight;
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;
  readonly Cpu = Cpu;
  readonly Code2 = Code2;
  readonly Clock = Clock;
  readonly Gauge = Gauge;

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }
}