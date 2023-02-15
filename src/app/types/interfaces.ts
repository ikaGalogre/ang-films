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
  currencies: Currency;
  flags: Flags;
  population: number;
}
export interface Name {
  common: string;
}
export interface Flags {
  png: string;
}
export interface Currency {
  [key: string]: { name: string; symbol: string };
}
