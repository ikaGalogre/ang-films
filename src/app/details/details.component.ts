import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmApiService } from '../films-api.service';
import { jsonMovie } from '../types/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  filmName: string | null = '';
  movie: any;
  dataService: any;
  constructor(
    private route: ActivatedRoute,
    private api: FilmApiService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.filmName = this.route.snapshot.paramMap.get('name');
    this.dataService = this.api.getJsonData().subscribe((data: jsonMovie[]) => {
      this.movie = data.find((movie) => movie.Title === this.filmName);
      console.log(this.movie);
    });
  }
  deleteFilm(id: number) {
    this.api.deletejSonData(id).subscribe(
      //reset
      () =>
        (this.dataService = this.api
          .getJsonData()
          .subscribe((data: jsonMovie[]) => {
            this.movie = data.find((movie) => movie.Title === this.filmName);
            console.log(this.movie);
          }))
    );
  }
}
