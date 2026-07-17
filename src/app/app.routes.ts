import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'AurexLabs | Modern Websites & Custom Web Applications'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact AurexLabs | Start Your Website or Web App Project'
  },
  {
    path: '**',
    redirectTo: ''
  }
];