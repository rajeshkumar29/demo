import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskControllerComponent } from './view-task-controller.component';

describe('ViewTaskControllerComponent', () => {
  let component: ViewTaskControllerComponent;
  let fixture: ComponentFixture<ViewTaskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTaskControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTaskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
