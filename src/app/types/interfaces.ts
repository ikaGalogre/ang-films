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

export interface jsonMovie {
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
