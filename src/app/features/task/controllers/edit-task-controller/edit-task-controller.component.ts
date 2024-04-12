import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-task-controller',
  templateUrl: './edit-task-controller.component.html',
  styles: ':host {@apply block py-6}',
})
export class EditTaskControllerComponent {
  constructor(private location: Location) { }

  back() {
    this.location.back();
  }
}
