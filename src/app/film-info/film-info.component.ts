import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { filmApiService } from '../films-api.service';
import { Country, Movie } from '../types/interfaces';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss'],
})
export class FilmInfoComponent implements OnInit {
  movie$: Observable<Movie> | undefined;
  country: Country | undefined;
  search = new FormControl();
  constructor(private api: filmApiService) {}

  ngOnInit(): void {
    this.movie$ = this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((na) => this.api.getFilmData(na))
    );
  }
}
