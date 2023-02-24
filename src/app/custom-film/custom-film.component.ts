import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FilmApiService } from '../films-api.service';

@Component({
  selector: 'app-custom-film',
  templateUrl: './custom-film.component.html',
  styleUrls: ['./custom-film.component.scss'],
})
export class CustomFilmComponent {
  movie$: Observable<any[]> | undefined;
  constructor(private api: FilmApiService) {}

  ngOnInit(): void {
    this.movie$ = this.api.getCustomData().pipe(map((custom) => custom || []));
  }
}
