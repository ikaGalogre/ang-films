export interface Movie {
  Poster: string;
  Title: string;
  Actors: string;
  Country: string;
  Year: number;
  Runtime: string;
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
  // [key: string]: { name: string; symbol: string };
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
