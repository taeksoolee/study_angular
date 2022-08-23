import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-float-icon-button',
  templateUrl: './float-icon-button.component.html',
  styleUrls: ['./float-icon-button.component.scss']
})
export class FloatIconButtonComponent implements OnInit {
  @Output() click = new EventEmitter<MouseEvent>();
  @Input() float: 'right' | 'left' = 'left';

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: MouseEvent) {
    this.click.emit(event);
  }

}
