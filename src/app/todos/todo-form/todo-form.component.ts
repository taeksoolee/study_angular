import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoForFormEvent, Todo } from 'src/app/shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() todo?: Todo;
  @Output('form-submit') submit: EventEmitter<TodoForFormEvent> = new EventEmitter();

  todoForm: FormGroup = new FormGroup({
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
    this.submit.emit({
      title: this.title.value,
      description: this.description.value,
    });
  }

}
