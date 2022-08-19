import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoExamComponent } from './todo-exam.component';

describe('TodoExamComponent', () => {
  let component: TodoExamComponent;
  let fixture: ComponentFixture<TodoExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
