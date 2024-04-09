import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskControllerComponent } from './list-task-controller.component';

describe('ListTaskControllerComponent', () => {
  let component: ListTaskControllerComponent;
  let fixture: ComponentFixture<ListTaskControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTaskControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTaskControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
