import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormModifyComponent } from './todo-form-modify.component';

describe('TodoFormModifyComponent', () => {
  let component: TodoFormModifyComponent;
  let fixture: ComponentFixture<TodoFormModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
