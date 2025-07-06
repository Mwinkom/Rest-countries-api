import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Country } from '../../models/country.model';
import {
  selectAllCountries,
  selectLoading,
  selectError
} from '../../store/selectors/country.selectors';
import { loadCountries } from '../../store/actions/country.actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit {
  private store = inject(Store);

  countries$ = this.store.select(selectAllCountries);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  ngOnInit(): void {
    this.store.dispatch(loadCountries());
  }
}
