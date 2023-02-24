import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmApiService } from '../films-api.service';
import { JsonMovie } from '../types/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  filmName: string | null = '';
  movie: any;
  dataService: any;
  selectedId: any;
  @ViewChild('input') input: ElementRef | undefined;
  constructor(
    private route: ActivatedRoute,
    private api: FilmApiService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.filmName = this.route.snapshot.paramMap.get('name');
    this.dataService = this.api.getJsonData().subscribe((data: JsonMovie[]) => {
      this.movie = data.find((movie) => movie.Title === this.filmName);
    });
  }
  deleteFilm(id: number) {
    this.api.deletejSonData(id).subscribe(
      //reset
      () =>
        (this.dataService = this.api
          .getJsonData()
          .subscribe((data: JsonMovie[]) => {
            this.movie = data.find((movie) => movie.Title === this.filmName);
          }))
    );
  }
  editFilm(id: number) {
    this.selectedId = id;
  }
  edit(movie: any) {
    const value = this.input?.nativeElement.value;

    this.api
      .editJsonData({
        ...movie,
        Des: value,
      })
      .subscribe(
        //reset
        () =>
          (this.dataService = this.api
            .getJsonData()
            .subscribe((data: JsonMovie[]) => {
              this.movie = data.find((movie) => movie.Title === this.filmName);
              this.cancelEditFilm();
            }))
      );
  }
  cancelEditFilm() {
    this.selectedId = undefined;
  }
}
