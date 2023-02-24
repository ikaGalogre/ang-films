import { Pipe, PipeTransform } from '@angular/core';
import { FilmApiService } from './films-api.service';

@Pipe({
  name: 'countries',
})
export class CountriesPipe implements PipeTransform {
  country: string[] = [
    'country1',
    'country2',
    'country3',
    'country4',
    'country5',
    'country6',
    'country7',
    'country8',
    'country9',
    'country10',
  ];
  selectedHobby: string | null = null;

  constructor(private api: FilmApiService) {}

  transform(
    arr: any,
    used: (string | null)[] | undefined,
    self: string | null
  ): string[] {
    return this.country.filter((x) => {
      if (x === self) {
        return true;
      }

      if (!used?.includes(x)) {
        return true;
      }

      return false;
    });
  }

  ngOnInit() {
    // this.api.getCountryNames().subscribe((countries: any) => {
    //   countries.forEach((country: string) => {
    //     if (!this.country.includes(country)) {
    //       this.country.push(country);
    //       console.log(countries);
    //     }
    //   });
    // });
    this.api.getCountryNames().subscribe((countries: any) => {
      console.log(countries);
      this.country = countries;
    });
  }
}
