import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { API_BASE } from './tokens';
import { Country, jsonMovie, Movie } from './types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FilmApiService {
  constructor(
    private http: HttpClient,
    @Inject(API_BASE) private apiBase: string
  ) {}

  getCountryData(countryName: string): Observable<Country> {
    return this.http.get<Country>(
      `${this.apiBase}/${countryName}?fullText=true`
    );
  }
  getFilmData(name: string): Observable<Movie> {
    return this.http.get<Movie>(
      `${environment.apiBaseC}=${name}&apikey=540d1872`
    );
  }
  postjsonData(filmData: jsonMovie) {
    return this.http.post<jsonMovie>(
      `${environment.jsonServiceBase}/films`,
      filmData
    );
  }
  getJsonData() {
    return this.http.get<jsonMovie[]>(`${environment.jsonServiceBase}/films`);
  }
  deletejSonData(id:number) {
    return this.http.delete<jsonMovie[]>(
      `${environment.jsonServiceBase}/films/${id}`
    );
  }
}
