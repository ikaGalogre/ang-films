import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Genre } from '../types/interfaces';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenresComponent),
      multi: true,
    },
  ],
})
export class GenresComponent implements ControlValueAccessor {
  @Input() genres: Genre[] = [];
  private _selectedGenres: string[] = [];

  isSelected(label: string) {
    return this._selectedGenres.includes(label);
  }

  onChange: (genres: string[]) => void = () => {};
  onTouched: () => void = () => {};
  writeValue(genres: string[]) {
    this._selectedGenres = genres;
  }
  registerOnChange(fn: (genres: string[]) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean) {}
  select(label: string) {
    this._selectedGenres.push(label);
    this.onChange(this._selectedGenres);
  }
}
