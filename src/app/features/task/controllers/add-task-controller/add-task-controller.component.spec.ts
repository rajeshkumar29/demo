import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskControllerComponent } from './add-task-controller.component';

describe('AddTaskControllerComponent', () => {
  let component: AddTaskControllerComponent;
  let fixture: ComponentFixture<AddTaskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTaskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
