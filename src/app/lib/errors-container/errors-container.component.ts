import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'lib-errors-container',
  templateUrl: './errors-container.component.html',
  styleUrls: ['./errors-container.component.scss']
})
export class ErrorsContainerComponent implements OnInit {
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit(): void {
    
  }

}
