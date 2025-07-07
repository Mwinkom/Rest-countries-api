import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountryState } from "../state/country.state";

export const selectCountryState = createFeatureSelector<CountryState>("countries");

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

export const selectSearchQuery = createSelector(
    selectCountryState,
    (state: CountryState) => state.searchQuery
);

export const selectFilterRegion = createSelector(
    selectCountryState,
    (state: CountryState) => state.filterRegion
);

export const selectFilteredCountries = createSelector(
    selectAllCountries,
    selectSearchQuery,
    selectFilterRegion,
    (countries, searchQuery, filterRegion) => {
        return countries.filter(country => {
            const matchesSearch = !searchQuery || 
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRegion = !filterRegion || country.region === filterRegion;
            return matchesSearch && matchesRegion;
        });
    }
);