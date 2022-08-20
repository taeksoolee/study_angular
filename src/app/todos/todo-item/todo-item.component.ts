import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';
import { TodosStoreService } from 'src/app/shared/todos-store.service';

@Component({
  selector: 'todos-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() idx: Todo = null;
  @Input() item: Todo = null;

  selected = false;
  deleted = false;
  $selectedTodoId: Subscription | null = null;

  constructor(
    private todoApi: TodosApiService, 
    private todoStore: TodosStoreService,
  ) { }

  ngOnInit() {
    this.$selectedTodoId = this.todoStore.selectedTodoId.subscribe((id: number) => {
      if(id === this.item.id) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    });
  }

  ngOnDestroy() {
    this.$selectedTodoId && this.$selectedTodoId.unsubscribe();
  }

  select() {
    this.todoStore.selectedTodoId.next(this.item.id);
  }

  handleClickExitBtn() {
    this.deleteTodo();
  }

  deleteTodo() {
    this.deleted = true;
    this.todoApi.deleteTodo(this.item.id)
      .subscribe(_ => {
        this.todoApi.refresh.next(true);
      });
  }
}
