import { HttpHeaders } from "@angular/common/http";

export class ApiServiceBase {
  readonly apiURL = 'http://localhost:3000';

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
}
