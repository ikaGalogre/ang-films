import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { ThreeFilmsComponent } from './three-films/three-films.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { API_BASE } from './tokens';
import { environment } from 'src/environments/environment';
import { FavFilmsComponent } from './fav-films/fav-films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { DetailsComponent } from './details/details.component';
import { UploadFilmComponent } from './upload-film/upload-film.component';
import { CustomFilmComponent } from './custom-film/custom-film.component';
import { CountriesPipe } from './countries.pipe';
import { RatingComponent } from './rating/rating.component';
import { GenresComponent } from './genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmInfoComponent,
    ThreeFilmsComponent,
    FavFilmsComponent,
    AddFilmComponent,
    DetailsComponent,
    UploadFilmComponent,
    CustomFilmComponent,
    CountriesPipe,
    RatingComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: API_BASE,
      useValue: environment.apiBase,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
