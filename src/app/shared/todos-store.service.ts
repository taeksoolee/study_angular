import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosStoreService {
  constructor() { }
  selectedTodoId = new Subject<number>();
}
