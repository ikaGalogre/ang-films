import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  Observable,
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
  constructor(private api: FilmApiService) {}

  ngOnInit(): void {
    this.movie$ = this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((name) => this.api.getFilmData(name)),
      tap((movieData: Movie) => {
        const countries = movieData.Country.split(',').map((c) => c.trim());
        console.log(countries);
        this.country$ = forkJoin(
          countries.map((country) => this.api.getCountryData(country))
        );
        this.country$.subscribe((data) => console.log(data));
      })
    );
  }
}
