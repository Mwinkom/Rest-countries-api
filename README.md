# Countries API Application

## Project Description
A modern Angular application that displays country information using the REST Countries API. Features include country search, region filtering, detailed country views, and dark/light theme switching with NgRx state management.

## Setup & Run Instructions

### Installation
```bash
# Create angular application
ng new countries-api

# Start development server
ng serve
```

Navigate to `http://localhost:4200/` to view the application.

### Build for Production
```bash
ng build
```

## Application Features

- **Country List**: Display all countries with flags, population, region, and capital
- **Search Functionality**: Search countries by name with real-time filtering
- **Region Filter**: Filter countries by continent/region
- **Country Details**: Detailed view with native name, currencies, languages, and border countries
- **Theme Switching**: Toggle between dark and light modes
- **Responsive Design**: Mobile-first responsive layout
- **State Management**: NgRx for centralized state management

## Component Structure

### Core Components
- **AppComponent**: Root component with navigation and theme switcher
- **CountryListComponent**: Displays grid of country cards with search/filter
- **CountryDetailsComponent**: Shows detailed country information
- **SearchFilterComponent**: Handles search input and region filtering
- **ThemeSwitcherComponent**: Toggle between light/dark themes

### Services
- **CountryApiService**: HTTP client for REST Countries API
- **ErrorHandlerService**: Centralized error handling

## Routing Overview

```typescript
const routes: Routes = [
   { 
    path: '', 
    loadComponent: () => 
        import('./components/country-list/country-list.component').then(m => m.CountryListComponent)
  },
  { 
    path: 'country/:code', 
    loadComponent: () => 
        import('./components/country-details/country-details.component').then(m => m.CountryDetailsComponent)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
```

- **/** - Home page with country list and search/filter
- **/country/:code** - Country details page using country code (cca3)
- **Wildcard** - Redirects to home for invalid routes

## API Consumption

### REST Countries API Integration
- **Base URL**: `https://restcountries.com/v3.1`
- **Endpoints Used**:
  - `/all` - Get all countries
  - `/alpha/{code}` - Get country by code
  - `/alpha?codes={codes}` - Get multiple countries by codes

### API Fields
- Country list: `name,flags,population,region,capital,cca3`
- Country details: `name,flags,population,region,subregion,capital,cca3,tld,currencies,languages,borders`

## NgRx Store Implementation

### State Structure
```typescript
interface CountryState {
  countries: Country[];
  selectedCountry: Country | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterRegion: string;
}
```

### Actions
- `loadCountries` - Load all countries
- `loadCountryByCode` - Load specific country
- `setSearchQuery` - Update search filter
- `setFilterRegion` - Update region filter

### Effects
- **CountryEffects**: Handle API calls and side effects
- Manages loading states and error handling

### Selectors
- `selectAllCountries` - Get all countries
- `selectFilteredCountries` - Get filtered countries based on search/region
- `selectSelectedCountry` - Get currently selected country
- `selectLoading` - Get loading state

## Theme Switching Implementation

### CSS Custom Properties
```scss
:root {
  --bg-color: #{$light-bg};
  --text-color: #{$light-text};
  --element-color: #{$light-elements};
}

body.dark-theme {
  --bg-color: #{$dark-bg};
  --text-color: #{$dark-text};
  --element-color: #{$dark-elements};
}
```

### Theme Management
- Theme state stored in localStorage
- Body class toggling for theme switching
- Custom icons for light/dark modes
- Reactive theme switching across all components

## Git Workflow

### Branching Strategy
- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/***: Individual feature branches

