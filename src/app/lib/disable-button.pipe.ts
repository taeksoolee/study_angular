import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'disableButton'
})
export class DisableButtonPipe implements PipeTransform {

  transform(_: any, ...args: AbstractControl[]): boolean {
    const isDirty = args.reduce((a, c) => a || c.dirty, false);
    const isNotInvalid = args.reduce((a, c) => a && !c.invalid, true);

    const enable = (isDirty) && (isNotInvalid);
    return !(enable);
  }
}
