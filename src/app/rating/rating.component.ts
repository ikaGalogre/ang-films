import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements ControlValueAccessor {
  onChange: (rating: number) => void = () => {};
  onTouched: (rating: number) => void = () => {};
  disabled = false;

  writeValue(rating: number) {
    this.rating = rating;
    this.onChange(rating);
  }
  registerOnChange(fn: (rating: number) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
  rating = 0;
  private _stars: unknown[] = Array(5);
  get stars() {
    return this._stars;
  }
  @Input() set maxRating(value: number) {
    this._stars = Array(value);
  }
  private _hoveredIndex = -1;

  enter(index: number) {
    this._hoveredIndex = index;
  }
  leave() {
    this._hoveredIndex = -1;
  }
  select(index: number) {
    this.rating = index + 1;
    this.leave();
    this.onChange(this.rating);
    console.log(this.rating);
  }

  getStarClass(index: number) {
    if (this._hoveredIndex >= index) {
      return {
        active: true,
        hovered: true,
      };
    }
    if (this.rating > index && this._hoveredIndex === -1) {
      return {
        active: true,
      };
    }
    return {};
  }
  isHovered(index: number) {
    return this._hoveredIndex === index;
  }
}
