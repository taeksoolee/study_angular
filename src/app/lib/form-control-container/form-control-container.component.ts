import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'lib-form-control-container',
  templateUrl: './form-control-container.component.html',
  styleUrls: ['./form-control-container.component.scss']
})
export class FormControlContainerComponent implements OnInit {
  @Input() for: string = '';
  @Input() label: string = '';
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }
}
