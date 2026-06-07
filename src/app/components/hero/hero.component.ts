import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  mouseX = 0;
  mouseY = 0;

  ngOnInit() {
    AOS.init({ once: true, offset: 50 });
  }

  onMouseMove(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    this.mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 20;
  }
}