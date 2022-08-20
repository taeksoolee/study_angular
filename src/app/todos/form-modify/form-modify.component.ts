import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Todo, TodoForFormEvent } from 'src/app/shared/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';

@Component({
  selector: 'todos-form-modify',
  templateUrl: './form-modify.component.html',
  styleUrls: ['./form-modify.component.scss']
})
export class FormModifyComponent implements OnInit {
  @Input() todoId: number;
  todo: Todo | null = null;

  constructor(private todosApi: TodosApiService) { }

  get shown() {
    return this.todo !== null;
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const todoId = changes.todoId.currentValue;
    this.setTodo(todoId);
  }

  setTodo(id: number) {;
    if(id !== 0) {
      this.todosApi.getTodo(id).subscribe(data => {
        this.todo = data;
      });
    }
  }

  handleSubmit(todo: TodoForFormEvent) {
    this.modifyTodo(todo);
  }

  modifyTodo(todo: TodoForFormEvent) {
    this.todosApi.updateTodo(this.todoId, {
      ...todo,
      done: false,
    }).subscribe(data => {
      if(data?.id) {
        this.todosApi.refresh.next(true);
      }
    });
  }
}
