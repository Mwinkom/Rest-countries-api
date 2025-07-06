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
}