import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsContainerComponent } from './errors-container/errors-container.component';
import { FormControlContainerComponent } from './form-control-container/form-control-container.component';
import { FloatIconButtonComponent } from './float-icon-button/float-icon-button.component';
import { RequirementPipe } from './requirement.pipe';
import { DisabledButtonDirective } from './disabled-button.directive';

@NgModule({
  declarations: [
    ErrorsContainerComponent,
    FormControlContainerComponent,
    FloatIconButtonComponent,
    RequirementPipe,
    DisabledButtonDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorsContainerComponent,
    FormControlContainerComponent,
    FloatIconButtonComponent,
    DisabledButtonDirective,
  ]
})
export class LibModule { }
