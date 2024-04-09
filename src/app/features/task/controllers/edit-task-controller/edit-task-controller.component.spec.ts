import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskControllerComponent } from './edit-task-controller.component';

describe('EditTaskControllerComponent', () => {
  let component: EditTaskControllerComponent;
  let fixture: ComponentFixture<EditTaskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTaskControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTaskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
