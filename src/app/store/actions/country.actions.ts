import { Country } from "../../models/country.model";
import { createAction, props } from "@ngrx/store";

export const loadCountries = createAction(
  "[Country] Load Countries"
);

export const loadCountriesSuccess = createAction(
  "[Country] Load Countries Success",
  props<{ countries: Country[] }>()
);

export const loadCountriesFailure = createAction(
  "[Country] Load Countries Failure",
  props<{ error: string }>()
);

export const loadCountryByCode = createAction(
  '[Country] Load Country By Code',
  props<{ code: string }>()
);

export const loadCountryByCodeSuccess = createAction(
  '[Country] Load Country By Code Success',
  props<{ country: Country }>()
);

export const loadCountryByCodeFailure = createAction(
  '[Country] Load Country By Code Failure',
  props<{ error: string }>()
);

export const setSearchQuery = createAction(
  "[Country] Set Search Query",
  props<{ searchQuery: string }>()
);

export const setFilterRegion = createAction(
  "[Country] Set Filter Region",
  props<{ filterRegion: string }>()
);