import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Todo, TodoForFormEvent } from 'src/app/shared/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';
import { TodosStoreService } from 'src/app/shared/todos-store.service';

@Component({
  selector: 'todos-form-modify',
  templateUrl: './form-modify.component.html',
  styleUrls: ['./form-modify.component.scss']
})
export class FormModifyComponent implements OnInit, OnChanges {
  @Output() afterSubmit = new EventEmitter();

  @Input() todoId: number;
  todo: Todo | null = null;
  
  constructor(private todosApi: TodosApiService, private todosStore: TodosStoreService) { }

  get isLoading() {
    return this.todo !== null;
  }

  ngOnInit() {}

  ngOnChanges(_: SimpleChanges): void {
    this.setTodo(this.todoId);
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
        this.afterSubmit.emit(true);
        this.todosApi.refresh.next(true);
        this.todosStore.submitedTodoForm.next(true);
      }
    });
  }
}
