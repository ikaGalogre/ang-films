import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { alreadyUsedName, dateValidator } from '../app.validator';
import { FilmApiService } from '../films-api.service';
import { FilmForm, MovOrTv, Genresss, Genre } from '../types/interfaces';

@Component({
  selector: 'app-upload-film',
  templateUrl: './upload-film.component.html',
  styleUrls: ['./upload-film.component.scss'],
})
export class UploadFilmComponent {
  movOrTv = MovOrTv;
  isSubmitted = false;
  id: number = 0;
  countries: string[] = [];
  countriess$: Observable<any[]> | undefined;
  genres: Genre[] = [
    {
      label: 'comedy',
      icon: '😊',
    },
    {
      label: 'horror',
      icon: '💀',
    },
    {
      label: 'drama',
      icon: '😔',
    },
    {
      label: 'adventure',
      icon: '⚔️',
    },
    {
      label: 'action',
      icon: '🔫',
    },
  ];
  form: FormGroup<FilmForm> = this.buildForm();

  search = new FormControl('');
  apiService: any;
  isFilm(): boolean {
    return this.form.controls.movOrTv.value === this.movOrTv.Film;
  }
  isTv(): boolean {
    return this.form.controls.movOrTv.value === this.movOrTv.Tv;
  }
  get plusBtnDisabled() {
    return this.form.controls.countries?.length === 5;
  }

  get removeBtnDisabled() {
    return this.form.controls.countries?.length === 1;
  }

  constructor(private fb: FormBuilder, private api: FilmApiService) {}

  addCountryControl() {
    const hobbies = this.form.controls.countries;
    hobbies?.push(this.fb.control(''));
  }
  removeCountryControl(index: number) {
    const hobbies = this.form.controls.countries;
    hobbies?.removeAt(index);
  }
  handleSubmission() {
    this.isSubmitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.api.postAddFilm(this.form.value).subscribe(() => {
        console.log(this.form.value);
        console.log(this.countriess$);
      });
    }
  }

  private buildForm() {
    return this.fb.group<FilmForm>({
      filmName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      premierPlace: this.fb.control('', [Validators.required]),
      countries: this.fb.array([new FormControl('')]),
      date: this.fb.control(null, [Validators.required, dateValidator()]),
      genre: this.fb.control([]),
      movOrTv: this.fb.control(null, [Validators.required]),
      tvDuration: this.fb.control(null, [
        Validators.required,
        Validators.min(5),
      ]),
      filmDuration: this.fb.control(null, [
        Validators.required,
        Validators.min(60),
        Validators.maxLength(190),
      ]),
      rating: this.fb.control(1, [Validators.min(1)]),
    });
  }
  ngOnInit() {
    this.form.controls.filmName.addAsyncValidators(alreadyUsedName());
    // this.api.getCountryNames().subscribe((countries: any) => {
    //   this.countriess$ = countries;
    // });
  }
}
