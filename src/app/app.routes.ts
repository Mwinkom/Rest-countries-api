import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => 
        import('./components/country-list/country-list.component').then(m => m.CountryListComponent)
  },
  { 
    path: 'country/:code', 
    loadComponent: () => 
        import('./components/country-details/country-details.component').then(m => m.CountryDetailsComponent)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];