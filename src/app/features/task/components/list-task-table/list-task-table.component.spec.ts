import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskTableComponent } from './list-task-table.component';

describe('ListTaskTableComponent', () => {
  let component: ListTaskTableComponent;
  let fixture: ComponentFixture<ListTaskTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTaskTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTaskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
