import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { countryReducer } from './store/reducers/country.reducers';
import { CountryEffects } from './store/effects/country.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideEffects([CountryEffects]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore({ countries: countryReducer }),
  ]
};
