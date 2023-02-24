import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { map, Observable } from 'rxjs';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate = control.value;
    const currentDate = new Date();
    if (selectedDate && selectedDate <= currentDate) {
      return { futureDate: true };
    }
    return null;
  };
}

const alreadyUsed = ['venera', 'pepsi'];

class ApiService {
  checkUsedName(name: string): Observable<boolean> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (alreadyUsed.includes(name)) {
          observer.next(true);
        } else {
          observer.next(false);
        }

        observer.complete();
      }, 2000);
    });
  }
}
export function alreadyUsedName(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const apiService = new ApiService();
    return apiService.checkUsedName(control.value).pipe(
      map((isUsed) => {
        return isUsed ? { isUsed } : null;
      })
    );
  };
}
