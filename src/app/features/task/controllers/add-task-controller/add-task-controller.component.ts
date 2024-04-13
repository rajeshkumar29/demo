import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from "../../store";
import { TaskModel } from '../../../../models';

@Component({
  selector: 'app-add-task-controller',
  templateUrl: './add-task-controller.component.html',
  styles: ':host {@apply block py-6}',
})
export class AddTaskControllerComponent {
  isPending$ = this.store.select(fromStore.selectIsAddPending);
  addError$ = this.store.select(fromStore.selectAddError);

  constructor(
    private store: Store,
    private location: Location,
  ) { }

  back() {
    this.location.back();
  }

  addTask(body: TaskModel) {
    console.log({ body });
    this.store.dispatch(fromStore.AddTaskBegin({ body }));
  }
}
