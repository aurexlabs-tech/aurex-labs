import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtaComponent } from './pages/cta/cta.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ProcessComponent } from './pages/process/process.component';
import { ServicesComponent } from './pages/services/services.component';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { WhyChooseUsComponent } from './pages/why-choose-us/why-choose-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutUsComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TechStackComponent,
    ServicesComponent,
    ProjectsComponent,
    ProcessComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AurexLabs Portfolio';
}