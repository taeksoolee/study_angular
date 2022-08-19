import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] | null = null;
  $refresh: Subscription | null = null;

  constructor(private todoApi: TodosApiService) { }

  ngOnInit() {
    this.loadTodos();

    this.todoApi.refresh.subscribe(data => {
      data && this.loadTodos();
    });
  }

  ngOnDestroy() {
    this.$refresh.unsubscribe();
  }

  loadTodos() {
    this.todoApi.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

}
