import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlContainerComponent } from './form-control-container.component';

describe('FormControlContainerComponent', () => {
  let component: FormControlContainerComponent;
  let fixture: ComponentFixture<FormControlContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
