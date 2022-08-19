import { TestBed, inject } from '@angular/core/testing';

import { TodosApiService } from './todos-api.service';

describe('TodosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosApiService]
    });
  });

  it('should be created', inject([TodosApiService], (service: TodosApiService) => {
    expect(service).toBeTruthy();
  }));
});
