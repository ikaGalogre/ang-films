import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FilmApiService } from '../films-api.service';
import { jsonMovie } from '../types/interfaces';

@Component({
  selector: 'app-fav-films',
  templateUrl: './fav-films.component.html',
  styleUrls: ['./fav-films.component.scss'],
})
export class FavFilmsComponent implements OnInit {
  movie$: Observable<jsonMovie[]> | undefined;
  constructor(private api: FilmApiService) {}

  ngOnInit(): void {
    this.movie$ = this.api
      .getJsonData()
      .pipe(map((jsonMovie) => jsonMovie || []));
  }
}
