import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_BASE } from './tokens';
import { Country, JsonMovie, Movie } from './types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FilmApiService {
  constructor(
    private http: HttpClient,
    @Inject(API_BASE) private apiBase: string
  ) {}

  getCountryData(countryName: string): Observable<Country> {
    return this.http
      .get<Country>(`${this.apiBase}/${countryName}?fullText=true`)
      .pipe(
        map((e: any) => {
          return e[0];
        })
      );
  }
  getFilmData(name: string): Observable<Movie> {
    return this.http.get<Movie>(
      `${environment.apiBaseC}=${name}&apikey=540d1872`
    );
  }
  postjsonData(filmData: JsonMovie) {
    return this.http.post<JsonMovie>(
      `${environment.jsonServiceBase}/films`,
      filmData
    );
  }
  getJsonData() {
    return this.http.get<JsonMovie[]>(`${environment.jsonServiceBase}/films`);
  }
  deletejSonData(id: number) {
    return this.http.delete<JsonMovie[]>(
      `${environment.jsonServiceBase}/films/${id}`
    );
  }

  editJsonData(movie: JsonMovie) {
    return this.http.patch<JsonMovie>(
      `${environment.jsonServiceBase}/films/${movie.id}`,
      movie
    );
  }
  postAddFilm(form: any) {
    return this.http.post<any>(`${environment.jsonServiceBase}/custom`, form);
  }

  getCountryNames(): Observable<string[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all').pipe(
      map((countries) => {
        return countries.map((country) => country.name.common);
      })
    );
  }
  getCustomData() {
    return this.http.get<any[]>(`${environment.jsonServiceBase}/custom`);
  }
}
