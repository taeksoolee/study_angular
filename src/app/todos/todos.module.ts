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
import { FormComponent } from './form/form.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormModifyComponent } from './form-modify/form-modify.component';
import { StyledModule } from '../styled/styled.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StyledModule,
  ],
  declarations: [
    TodosPageComponent,
    TodoItemComponent, 
    TodoListComponent, 
    TodoDetailComponent, 
    TodoPostComponent, 
    FormComponent, 
    FormCreateComponent, 
    FormModifyComponent
  ],
  exports: [TodosPageComponent],
  providers: [
    TodosApiService,
    TodosStoreService,
  ],
})
export class TodosModule { }
