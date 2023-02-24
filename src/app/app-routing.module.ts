import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { CustomFilmComponent } from './custom-film/custom-film.component';
import { DetailsComponent } from './details/details.component';
import { FavFilmsComponent } from './fav-films/fav-films.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { ThreeFilmsComponent } from './three-films/three-films.component';
import { UploadFilmComponent } from './upload-film/upload-film.component';

const routes: Routes = [
  {
    path: 'film',
    component: FilmInfoComponent,
  },
  {
    path: 'three',
    component: ThreeFilmsComponent,
  },
  {
    path: 'fav',
    component: FavFilmsComponent,
  },
  {
    path: 'upload',
    component: UploadFilmComponent,
  },
  {
    path: 'custom',
    component: CustomFilmComponent,
  },
  {
    path: 'film/:name/add',
    component: AddFilmComponent,
  },
  {
    path: 'fav/:name/details',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class appRoutingModule {}
