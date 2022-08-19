import { TestBed, inject } from '@angular/core/testing';

import { TodosStoreService } from './todos-store.service';

describe('TodosStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosStoreService]
    });
  });

  it('should be created', inject([TodosStoreService], (service: TodosStoreService) => {
    expect(service).toBeTruthy();
  }));
});
