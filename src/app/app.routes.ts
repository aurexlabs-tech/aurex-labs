import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'AurexLabs | Modern Websites & Custom Web Applications',
    data: {
      description: 'Looking for a professional website or custom web application? AurexLabs builds modern, responsive, and reliable digital solutions that help businesses grow online.',
      ogTitle: 'AurexLabs | Professional Website & Web Application Development',
      ogDescription: 'Custom websites and web applications built with modern technologies. Helping businesses create fast, reliable, and user-friendly digital experiences.',
      canonicalPath: '/'
    }
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact AurexLabs | Start Your Website or Web App Project',
    data: {
      description: 'Get in touch with AurexLabs to discuss your website or web application project. Free consultation, transparent pricing, and response within 24 hours.',
      ogTitle: 'Contact AurexLabs | Start Your Website or Web App Project',
      ogDescription: 'Get in touch with AurexLabs to discuss your website or web application project. Free consultation, transparent pricing, and response within 24 hours.',
      canonicalPath: '/contact'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];