import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmApiService } from '../films-api.service';
import { jsonMovie } from '../types/interfaces';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss'],
})
export class AddFilmComponent implements OnInit {
  filmName: string | null = '';
  description: string = '';
  rating: string = '';
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private api: FilmApiService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.filmName = this.route.snapshot.paramMap.get('name');
  }

  addFilmToFavorites() {
    if (this.filmName) {
      this.api.getFilmData(this.filmName).subscribe((movie) => {
        const newFilm: jsonMovie = {
          Title: movie.Title,
          Actors: movie.Actors,
          Poster: movie.Poster,
          Country: movie.Country,
          Year: movie.Year,
          Runtime: movie.Runtime,
          Rat: this.rating,
          Des: this.description,
          id: this.id,
        };
        this.api.postjsonData(newFilm).subscribe((res) => {
          this.id++;
        });
      });
    }
  }
}
