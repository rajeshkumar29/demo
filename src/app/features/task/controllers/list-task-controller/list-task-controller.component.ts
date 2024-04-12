import { Component } from '@angular/core';

@Component({
  selector: 'app-list-task-controller',
  templateUrl: './list-task-controller.component.html',
  styles: ':host {@apply block my-6}',
})
export class ListTaskControllerComponent {
  data = [{
    id: '123',
    title: 'first task',
    description: 'some descirption',
    dueDate: '2024/04/12',
    status: 'Open',
  }, {
    id: '124',
    title: 'second task',
    description: 'some more descirption',
    dueDate: '2024/04/12',
    status: 'Close',
  }];
}
