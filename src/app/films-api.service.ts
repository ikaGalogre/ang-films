import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Country, Movie } from './types/interfaces';

const API_BASE = 'https://restcountries.com/v3.1/name';
const API_BASE2 = 'http://www.omdbapi.com/?t';

@Injectable({
  providedIn: 'root',
})
export class filmApiService {
  constructor(private http: HttpClient) {}

  getCountryData(countryName: string): Observable<Country> {
    return this.http.get<Country>(`${API_BASE}/${countryName}?fullText=true`);
  }
  getFilmData(name: string): Observable<Movie> {
    return this.http.get<Movie>(`${API_BASE2}=${name}&apikey=540d1872`);
  }
}
