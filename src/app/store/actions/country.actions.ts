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

export const selectCountry = createAction(
  "[Country] Select Country",
  props<{ country: Country }>()
);

export const setSearchQuery = createAction(
  "[Country] Set Search Query",
  props<{ searchQuery: string }>()
);

export const setFilterRegion = createAction(
  "[Country] Set Filter Region",
  props<{ filterRegion: string }>()
);