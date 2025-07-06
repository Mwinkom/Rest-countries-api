import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountryState } from "../state/country.state";

export const selectCountryState = createFeatureSelector<CountryState>("country");

export const selectAllCountries = createSelector(
    selectCountryState,
    (state: CountryState) => state.countries
);

export const selectSelectedCountry = createSelector(
    selectCountryState,
    (state: CountryState) => state.selectedCountry
);

export const selectLoading = createSelector(
    selectCountryState,
    (state: CountryState) => state.loading
);

export const selectError = createSelector(
    selectCountryState,
    (state: CountryState) => state.error
);