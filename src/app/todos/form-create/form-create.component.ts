import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoForFormEvent } from 'src/app/shared/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';
import { TodosStoreService } from 'src/app/shared/todos-store.service';

@Component({
  selector: 'todos-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {
  @Output() afterSubmit = new EventEmitter();

  constructor(private todosApi: TodosApiService, private todosStore: TodosStoreService) { }

  ngOnInit() { }

  handleSubmit(todo: TodoForFormEvent) {
    this.createTodo(todo);
  }

  createTodo(todo: TodoForFormEvent) {
    this.todosApi.createTodo({
        ...todo,
        done: false,
      })
      .subscribe(data => {
        if(data?.id) {
          this.afterSubmit.emit(true);
          this.todosApi.refresh.next(true);
          this.todosStore.submitedTodoForm.next(true);
        }
      });
  }
}
