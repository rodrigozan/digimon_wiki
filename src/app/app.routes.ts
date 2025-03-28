import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'digimon-details',
    loadComponent: () => import('./pages/digimon-details/digimon-details.page').then( m => m.DigimonDetailsPage)
  },
  {
    path: 'series-list',
    loadComponent: () => import('./pages/series-list/series-list.page').then( m => m.SeriesListPage)
  },
  {
    path: 'series-details',
    loadComponent: () => import('./pages/series-details/series-details.page').then( m => m.SeriesDetailsPage)
  },
  {
    path: 'evolution-tree',
    loadComponent: () => import('./pages/evolution-tree/evolution-tree.page').then( m => m.EvolutionTreePage)
  },
];
