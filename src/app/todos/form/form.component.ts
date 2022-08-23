import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo, TodoForFormEvent } from 'src/app/shared/interfaces/todo';

@Component({
  selector: 'todos-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() buttonText: string = '';
  @Input() todo?: Todo | null = null;
  @Output('formSubmit') submit: EventEmitter<TodoForFormEvent> = new EventEmitter();

  todoForm: FormGroup | null = null;

  constructor() { }

  get title() {
    return this.todoForm.get('title');
  }

  get description() {
    return this.todoForm.get('description');
  }

  ngOnInit() {
    this.initTodoForm();
  }

  ngOnChanges(_: SimpleChanges) {
    if(this.todo) {
      this.title.setValue(this.todo.title);
      this.description.setValue(this.todo.description);
    }
  }

  initTodoForm() {
    this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(50)]),
    });
  }

  handleSubmit() {
    this.submit.emit({
      title: this.title.value,
      description: this.description.value,
    });
    this.resetTodoForm();
  }

  resetTodoForm() {
    this.initTodoForm();
  }
}
