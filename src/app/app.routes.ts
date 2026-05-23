import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/hero/hero.component').then(m => m.HeroComponent),
    title: 'AurexLabs | Modern Web Development Studio'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];