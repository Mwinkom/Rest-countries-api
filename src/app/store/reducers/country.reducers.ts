import { createReducer, on } from "@ngrx/store";
import { CountryState } from "../state/country.state";
import * as CountryActions from "../actions/country.actions";

const initialState: CountryState = {
  countries: [],    
  selectedCountry: null,
  loading: false,
  error: null
};

export const countryReducer = createReducer(
  initialState,
  on(CountryActions.loadCountries, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries: countries,
    loading: false,
    error: null
  })),
  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  })),
  on(CountryActions.selectCountry, (state, { country }) => ({
    ...state,
    selectedCountry: country
  }))
);