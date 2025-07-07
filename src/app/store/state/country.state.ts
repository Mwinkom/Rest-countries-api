import { Country } from "../../models/country.model";

export interface CountryState {
  countries: Country[];
  selectedCountry: Country | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterRegion: string;
}
