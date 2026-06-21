import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    const doScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (this.router.url === '/' || this.router.url === '') {
      doScroll();
    } else {
      this.router.navigate(['/']).then(() => {
        // Wait for the home page components to render
        setTimeout(doScroll, 150);
      });
    }
  }
}