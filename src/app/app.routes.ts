import { Routes } from '@angular/router';

// Import your new Home wrapper and existing page components
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutUsComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'AurexLabs | Engineering Digital Scalability' // Sets the browser tab title dynamically
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services | AurexLabs'
  },
  {
    path: 'work',
    component: ProjectsComponent,
    title: 'Work | AurexLabs'
  },
  {
    path: 'about',
    component: AboutUsComponent,
    title: 'About Us | AurexLabs'
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