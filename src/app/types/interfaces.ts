import { FormArray, FormControl } from '@angular/forms';

export interface Movie {
  Title: string;
  Year: number;
  Actors: string;
  Poster: string;
  Country: string;
  Runtime: string;
  Population: number;
  Countries: { flag: string; currency: string }[];
}
export interface Country {
  name: Name;
  currencies: Currency[];
  flags: {
    png: string;
  };
  population: number;
}
export interface Name {
  common: string;
}
export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface JsonMovie {
  Poster: string;
  Title: string;
  Actors: string;
  Country: string;
  Year: number;
  Runtime: string;
  Des: string;
  Rat: string;
  id: number;
}

export enum Genre {
  Action = 'Action',
  Comedy = 'Comedy',
  SciFi = 'SciFi',
}

export enum MovOrTv {
  Tv = 'tv',
  Film = 'film',
}

export interface FilmForm {
  filmName: FormControl<string | null>;
  premierPlace: FormControl<string | null>;
  countries?: FormArray<FormControl<string | null>>;
  date: FormControl<Date | null>;
  genre: FormControl<Genre | null>;
  movOrTv: FormControl<MovOrTv | null>;
  tvDuration?: FormControl<number | null>;
  filmDuration?: FormControl<number | null>;
}
