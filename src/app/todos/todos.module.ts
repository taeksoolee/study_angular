import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosApiService } from '../shared/todos-api.service';
import { TodosStoreService } from '../shared/todos-store.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoPostComponent } from './todo-post/todo-post.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoExamComponent } from './todo-exam/todo-exam.component';
import { TodoFormModifyComponent } from './todo-form-modify/todo-form-modify.component';
import { TodoFormCreateComponent } from './todo-form-create/todo-form-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [TodoItemComponent, TodosPageComponent, TodoListComponent, TodoDetailComponent, TodoPostComponent, TodoFormComponent, TodoExamComponent, TodoFormModifyComponent, TodoFormCreateComponent],
  exports: [TodosPageComponent],
  providers: [
    TodosApiService,
    TodosStoreService,
  ],
})
export class TodosModule { }
