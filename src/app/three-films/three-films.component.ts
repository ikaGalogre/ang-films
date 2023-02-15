import { Component } from '@angular/core';
import { filmApiService } from '../films-api.service';
import { Country, Movie } from '../types/interfaces';

@Component({
  selector: 'app-three-films',
  templateUrl: './three-films.component.html',
  styleUrls: ['./three-films.component.scss'],
})
export class ThreeFilmsComponent {
  input1: string = '';
  input2: string = '';
  input3: string = '';
  movie: Movie | undefined;
  country: Country | undefined;
  constructor(private api: filmApiService) {}

  onSearchThree() {
    this.searchMovie(this.input1);
    this.searchMovie(this.input2);
    this.searchMovie(this.input3);
  }
  searchMovie(name: string) {
    if (name.length) {
      return;
    }
    this.api.getFilmData(name).subscribe((data) => {
      this.movie = data;
      const countryName = this.movie.Country;
      this.api.getCountryData(countryName).subscribe((country: Country) => {
        this.country = country;
      });
    });
  }
}
