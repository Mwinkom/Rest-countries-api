import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Country } from '../../models/country.model';
import {
  selectFilteredCountries,
  selectLoading,
  selectError
} from '../../store/selectors/country.selectors';
import { loadCountries, setSearchQuery, setFilterRegion } from '../../store/actions/country.actions';
import { RouterModule } from '@angular/router';
import { SearchFilterComponent } from '../search-filter/search-filter.component';

@Component({
  selector: 'app-country-list',
  imports: [CommonModule, RouterModule, SearchFilterComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  private store = inject(Store);

  countries$ = this.store.select(selectFilteredCountries);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }

  onSearch(searchQuery: string): void {
    this.store.dispatch(setSearchQuery({ searchQuery }));
  }

  onRegionChange(filterRegion: string): void {
    this.store.dispatch(setFilterRegion({ filterRegion }));
  }
}
