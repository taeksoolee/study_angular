import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Pipe({
  name: 'requirement'
})
export class RequirementPipe implements PipeTransform {
  transform(value: AbstractControl, ..._: any[]): string {
    if(!(value instanceof AbstractControl)) {
      return '';
    }

    return value.hasValidator(Validators.required) ? '*' : '';
  }
}
