import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'AurexLabs | Engineering Digital Scalability'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | AurexLabs'
  },
  {
    path: '**',
    redirectTo: ''
  }
];