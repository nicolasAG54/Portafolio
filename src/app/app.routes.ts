import { Routes } from '@angular/router';

import { profile } from './data/portfolio.data';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page.component').then(
        (component) => component.HomePageComponent,
      ),
    title: profile.pageTitle.en,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
