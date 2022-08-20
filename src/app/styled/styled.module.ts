import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    CardContainerComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    PrimaryButtonComponent,
    CardContainerComponent,
    TitleComponent,
  ]
})
export class StyledModule { }
