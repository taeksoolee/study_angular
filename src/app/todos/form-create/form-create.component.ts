import { Component, OnInit } from '@angular/core';
import { TodoForFormEvent } from 'src/app/shared/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';

@Component({
  selector: 'todos-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {
  constructor(private todosApi: TodosApiService) { }

  ngOnInit() { }

  handleSubmit(todo: TodoForFormEvent) {
    this.createTodo(todo);
  }

  createTodo(todo: TodoForFormEvent) {
    this.todosApi.createTodo({
      ...todo,
      done: false,
    }).subscribe(data => {
      if(data?.id) {
        this.todosApi.refresh.next(true);
      }
    });
  }

}
