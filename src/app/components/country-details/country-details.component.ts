import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { selectSelectedCountry, selectLoading, selectError } from '../../store/selectors/country.selectors';
import { loadCountryByCode } from '../../store/actions/country.actions';
import { CountryApiService } from '../../services/country-api.service';
import { Country } from '../../models/country.model';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-country-details',
  imports: [CommonModule, RouterModule, NgIf, NgFor, AsyncPipe],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private countryService = inject(CountryApiService);

  country$ = this.store.select(selectSelectedCountry);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);
  borderCountries: { [code: string]: string } = {};

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.store.dispatch(loadCountryByCode({ code }));
      this.country$.subscribe(country => {
        if (country?.borders?.length) {
          this.loadBorderCountryNames(country.borders);
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  getFirstValue(obj?: Record<string, any>): string {
    return obj ? Object.values(obj)[0]?.common || 'N/A' : 'N/A';
  }

  getCurrencyString(currencies?: Country['currencies']): string {
    if (!currencies) return 'N/A';
    return Object.values(currencies)
      .map((c) => `${c.name} (${c.symbol})`)
      .join(', ');
  }

  getLanguages(languages?: Country['languages']): string {
    if (!languages) return 'N/A';
    return Object.values(languages).join(', ');
  }

  getBorderCountryName(code: string): string {
    return this.borderCountries[code] || code;
  }

  private loadBorderCountryNames(borderCodes: string[]): void {
    this.countryService.getCountriesByCodes(borderCodes).subscribe(countries => {
      countries.forEach(country => {
        this.borderCountries[country.cca3] = country.name.common;
      });
    });
  }

  viewBorder(code: string) {
    this.router.navigate(['/country', code]);
    this.store.dispatch(loadCountryByCode({ code }));
  }
}
