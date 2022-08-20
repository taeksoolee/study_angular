import { Component, OnInit } from '@angular/core';
import { TodosApiService } from 'src/app/shared/todos-api.service';

@Component({
  selector: 'todos-todo-post',
  templateUrl: './todo-post.component.html',
  styleUrls: ['./todo-post.component.scss']
})
export class TodoPostComponent implements OnInit {

  constructor(private todoApi: TodosApiService) { }

  ngOnInit(): void {
  }
}
