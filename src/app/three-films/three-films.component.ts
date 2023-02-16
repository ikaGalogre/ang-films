import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { FilmApiService } from '../films-api.service';

import { Movie } from '../types/interfaces';

@Component({
  selector: 'app-three-films',
  templateUrl: './three-films.component.html',
  styleUrls: ['./three-films.component.scss'],
})
export class ThreeFilmsComponent {
  movies: Movie[] = [];
  search1 = new FormControl();
  search2 = new FormControl();
  search3 = new FormControl();
  totalRuntime = '';
  totalPopulation = '';

  constructor(private api: FilmApiService) {}
  onSearchThree(): void {
    const movies: string[] = [
      this.search1.value,
      this.search2.value,
      this.search3.value,
    ];
    const movieObs: Observable<Movie>[] = [];

    movies.forEach((movie) => {
      movieObs.push(this.api.getFilmData(movie));
    });

    forkJoin(movieObs).subscribe((data: any) => {
      const totalRuntime = data.reduce(
        (sum: any, movie: any) => sum + parseInt(movie.Runtime),
        0
      );
      this.totalRuntime = totalRuntime;

      const countries: string[] = [
        data[0]?.Country?.split(',')[0].trim(),
        data[1]?.Country?.split(',')[0].trim(),
        data[2]?.Country?.split(',')[0].trim(),
      ];
      const countryObs: Observable<any>[] = [];

      countries.forEach((country) => {
        countryObs.push(this.api.getCountryData(country));
      });

      forkJoin(countryObs).subscribe((data: any) => {
        const populations = data.map(
          (country: any) => country[0]?.population || 0
        );
        const totalPopulation = populations.reduce(
          (sum: number, population: number) => sum + population,
          0
        );
        this.totalPopulation = totalPopulation;
      });
    });
  }
}
