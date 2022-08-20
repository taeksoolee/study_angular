import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo, TodoForFormEvent } from 'src/app/shared/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';
import { TodosStoreService } from 'src/app/shared/todos-store.service';

@Component({
  selector: 'todos-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  selectedTodoId: number = 0;
  $selectedTodoId: Subscription | null = null;

  constructor(private todosStore: TodosStoreService) { }

  get shown() {
    return this.selectedTodoId > 0;
  }

  ngOnInit() {
    this.$selectedTodoId = this.todosStore.selectedTodoId.subscribe((id) => this.selectedTodoId = id);
  }

  ngOnDestroy() {
    this.$selectedTodoId && this.$selectedTodoId.unsubscribe();
  }

  close() {
    this.todosStore.selectedTodoId.next(0);
  }
}
