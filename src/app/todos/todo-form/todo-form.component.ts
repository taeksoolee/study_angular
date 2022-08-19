import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Input() todoForm: FormGroup | null;
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.submit.emit('submit');
  }

}
