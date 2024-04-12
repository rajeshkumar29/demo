import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task-controller',
  templateUrl: './add-task-controller.component.html',
  styles: ':host {@apply block py-6}',
})
export class AddTaskControllerComponent {
  constructor(private location: Location) { }

  back() {
    this.location.back();
  }
}
