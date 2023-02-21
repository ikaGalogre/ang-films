import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { FilmApiService } from '../films-api.service';
import { Country, Movie } from '../types/interfaces';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss'],
})
export class FilmInfoComponent implements OnInit {
  movie$: Observable<Movie> | undefined;
  country$: Observable<Country[]> | undefined;
  search = new FormControl();
  constructor(private api: FilmApiService, private router: Router) {}

  ngOnInit(): void {
    this.movie$ = this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((name) => this.api.getFilmData(name)),
      switchMap((movieData: Movie) => {
        const countries = movieData.Country.split(',').map((c) => c.trim());

        return forkJoin(
          countries.map((country) => this.api.getCountryData(country))
        ).pipe(
          map((countriesInfo) => {
            return {
              Title: movieData.Title,
              Year: movieData.Year,
              Actors: movieData.Actors,
              Poster: movieData.Poster,
              Country: movieData.Country,
              Runtime: movieData.Runtime,
              Population: movieData.Population,
              Countries: countriesInfo.map((e) => ({
                flag: e.flags.png,
                currency: Object.keys(e.currencies)[0],
              })),
            };
          })
        );
      })
    );
  }
}
