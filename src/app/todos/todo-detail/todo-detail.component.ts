import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodosApiService } from 'src/app/shared/todos-api.service';
import { TodosStoreService } from 'src/app/shared/todos-store.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  shown = false;
  todo: Todo | null = null;
  todoForm: FormGroup | null = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  $selectedTodoId: Subscription | null = null;

  constructor(private todoApi: TodosApiService, private todoStore: TodosStoreService) { }

  get title() {
    return this.todoForm.get('title');
  }

  get description() {
    return this.todoForm.get('description');
  }

  ngOnInit() {
    this.$selectedTodoId = this.todoStore.selectedTodoId.subscribe((id) => this.setTodoId(id))
  }

  ngOnDestroy() {
    this.$selectedTodoId && this.$selectedTodoId.unsubscribe();
  }

  setTodoId(id: number) {;
    if(id !== 0) {
      this.shown = true;
      this.todoApi.getTodo(id).subscribe(data => {
        this.title.setValue(data.title);
        this.description.setValue(data.description);
        
        this.todo = data;
      })
    }
  }

  close() {
    this.shown = false;
    this.todo = null;
    this.title.setValue('');
    this.description.setValue('');
    this.todoStore.selectedTodoId.next(0);
  }

  handleSubmitTodoForm() {
    this.modifyTodo();
  }

  modifyTodo() {
    this.todoApi.updateTodo(this.todo.id, {
      title: this.title.value,
      description: this.description.value,
      done: false,
    }).subscribe(data => {
      if(data?.id) {
        this.todoApi.refresh.next(true);
      }
    });

    // this.todoApi.createTodo({
    //   title: this.title.value,
    //   description: this.description.value,
    //   done: false,
    // }).subscribe(data => {
    //   if(data?.id) {
    //     this.todoApi.refresh.next(true);
    //   }
    // });
  }
}
