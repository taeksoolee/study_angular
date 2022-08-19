import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Todo } from './interfaces/todo';
import { retry, catchError } from 'rxjs/operators';
import { ApiServiceBase } from './classes/ApiServiceBase';

@Injectable({
  providedIn: 'root'
})
export class TodosApiService extends ApiServiceBase {
  refresh = new Subject<boolean>();

  constructor(private http: HttpClient) {
    super();
  }

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.apiURL + '/todos')
      .pipe(retry(1), catchError(this.handleError));
  }

  getTodo(id: number): Observable<Todo> {
    return this.http
    .get<Todo>(this.apiURL + '/todos/' + id)
    .pipe(retry(1), catchError(this.handleError));
  }

  createTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http
      .post<Todo>(
        this.apiURL + '/todos/',
        JSON.stringify(todo),
        this.HttpOptions,
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateTodo(id, todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http
      .put<Todo>(
        this.apiURL + '/todos/' + id,
        JSON.stringify(todo),
        this.HttpOptions,
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http
      .delete<Todo>(
        this.apiURL + '/todos/' + id,
        this.HttpOptions,
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);

    return throwError(() => {
      return errorMessage;
    })
  }
}
