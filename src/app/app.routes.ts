import { Routes } from '@angular/router';

// Import your new Home wrapper and existing page components
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'AurexLabs | Engineering Digital Scalability'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | AurexLabs'
  },
  {
    path: '**',
    redirectTo: ''
  }
];