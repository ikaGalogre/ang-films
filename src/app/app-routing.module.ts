import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { ThreeFilmsComponent } from './three-films/three-films.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  {
    path: 'film',
    component: FilmInfoComponent,
  },
  {
    path: 'three',
    component: ThreeFilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class appRoutingModule {}
