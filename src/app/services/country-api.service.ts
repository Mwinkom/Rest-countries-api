import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/country.model';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all?fields=name,flags,population,region,capital,cca3`).pipe(
      catchError(error => this.errorHandler.handleHttpError(error))
    );
  }

  getCountryByCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}?fields=name,flags,population,region,subregion,capital,cca3,tld,currencies,languages,borders`).pipe(
      catchError(error => this.errorHandler.handleHttpError(error))
    );
  }

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    const joined = codes.join(',');
    return this.http.get<Country[]>(`${this.apiUrl}/alpha?codes=${joined}&fields=name,flags,population,region,capital,cca3`).pipe(
      catchError(error => this.errorHandler.handleHttpError(error))
    );
  }


}
