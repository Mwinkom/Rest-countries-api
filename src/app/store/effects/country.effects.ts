import { Injectable, inject } from "@angular/core";
import { CountryApiService } from "../../services/country-api.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CountryActions from '../actions/country.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryService = inject(CountryApiService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap(() =>
        this.countryService.getAllCountries().pipe(
          map(countries => CountryActions.loadCountriesSuccess({ countries })),
          catchError(error =>
            of(CountryActions.loadCountriesFailure({ error: error.message })))
        )
      )
    )
  );
  
  loadCountryByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountryByCode),
      mergeMap(({ code }) => {
        return this.countryService.getCountryByCode(code).pipe(
          map((res) => {
            const country = Array.isArray(res) ? res[0] : res;
            return CountryActions.loadCountryByCodeSuccess({ country });
          }),
          catchError((error) => {
            return of(CountryActions.loadCountryByCodeFailure({ error: error.message }));
          })
        );
      })
    )
  );

}