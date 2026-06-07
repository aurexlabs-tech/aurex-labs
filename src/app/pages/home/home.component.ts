import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '../../components/cta/cta.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { ProcessComponent } from '../../components/process/process.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, WhyChooseUsComponent, ProjectsComponent, TestimonialsComponent, CtaComponent, ProcessComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}