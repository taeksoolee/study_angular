import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo, TodoForFormEvent } from 'src/app/shared/interfaces/todo';

@Component({
  selector: 'todos-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() todo?: Todo;
  @Output('form-submit') submit: EventEmitter<TodoForFormEvent> = new EventEmitter();

  todoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  constructor() { }

  get title() {
    return this.todoForm.get('title');
  }

  get description() {
    return this.todoForm.get('description');
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes) {
    const todo = changes.todo.currentValue as Todo;
    if(todo) {
      this.title.setValue(todo.title);
      this.description.setValue(todo.description);
    }
  }

  handleSubmit() {
    this.todoForm.value
    this.submit.emit({
      title: this.title.value,
      description: this.description.value,
    });
  }

}
