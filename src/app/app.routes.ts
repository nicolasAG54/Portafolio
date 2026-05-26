import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page.component').then((component) => component.HomePageComponent),
    title: 'Nicolas Alarcon Guzman | Angular Frontend Developer',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
