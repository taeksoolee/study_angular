import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'styled-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() type: 'submit' | 'button' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
