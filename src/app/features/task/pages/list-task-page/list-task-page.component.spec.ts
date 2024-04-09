import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskPageComponent } from './list-task-page.component';

describe('ListTaskPageComponent', () => {
  let component: ListTaskPageComponent;
  let fixture: ComponentFixture<ListTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTaskPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
