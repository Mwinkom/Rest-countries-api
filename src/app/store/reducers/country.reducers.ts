import { createReducer, on } from '@ngrx/store';
import { CountryState } from '../state/country.state';
import * as CountryActions from '../actions/country.actions';

const initialState: CountryState = {
  countries: [],
  selectedCountry: null,
  loading: false,
  error: null,
  searchQuery: '',
  filterRegion: ''
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
    countries,
    loading: false
  })),

  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(CountryActions.loadCountryByCode, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CountryActions.loadCountryByCodeSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false
  })),

  on(CountryActions.loadCountryByCodeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(CountryActions.setSearchQuery, (state, { searchQuery }) => ({
    ...state,
    searchQuery
  })),

  on(CountryActions.setFilterRegion, (state, { filterRegion }) => ({
    ...state,
    filterRegion
  }))
);
