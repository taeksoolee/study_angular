import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';
import { TodosStoreService } from 'src/app/shared/todos-store.service';

@Component({
  selector: 'todos-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() idx: number = 0;
  @Input() item: Todo = null;

  doneControl = new FormControl(false);

  selected = false;
  deleted = false;
  $selectedTodoId: Subscription | null = null;

  get done() {
    return this.doneControl.value;
  }

  constructor(
    private todosApi: TodosApiService, 
    private todosStore: TodosStoreService,
  ) { }

  ngOnInit() {
    this.$selectedTodoId = this.todosStore.selectedTodoId.subscribe((id: number) => {
      if(id === this.item.id) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    });

    this.doneControl.valueChanges.subscribe(done => {
      if(this.doneControl.dirty) {
        this.todosApi.updateTodo(this.item.id, { 
            title: this.item.title,
            description: this.item.description,
            done, 
          })
          .subscribe((todo: Todo) => {
            // console.log('updated todo : ', todo);
          })
      }
    })
  }

  ngOnChanges(_: SimpleChanges): void {
    if(this.item) {
      this.doneControl.setValue(this.item.done);
    }
  }

  ngOnDestroy() {
    this.$selectedTodoId && this.$selectedTodoId.unsubscribe();
  }

  select() {
    this.todosStore.selectedTodoId.next(this.item.id);
  }

  handleClickExitBtn(e: MouseEvent) {
    e.stopPropagation();
    this.todosStore.selectedTodoId.next(0);
    this.deleteTodo();
  }

  deleteTodo() {
    this.deleted = true;
    this.todosApi.deleteTodo(this.item.id)
      .subscribe(_ => {
        this.todosApi.refresh.next(true);
      });
  }
}
