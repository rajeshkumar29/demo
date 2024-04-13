import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromStore from "../../store";
import { map } from 'rxjs';
import { TaskModel } from '../../../../models';

@Component({
  selector: 'app-edit-task-controller',
  templateUrl: './edit-task-controller.component.html',
  styles: ':host {@apply block py-6}',
})
export class EditTaskControllerComponent {
  data$ = this.store.select(fromStore.selectTaskList).pipe(
    map((list) => {
      return list?.filter(task => task.id === this.route.snapshot.params['id'])[0];
    }),
  );
  isPending$ = this.store.select(fromStore.selectIsUpdatePending);
  error$ = this.store.select(fromStore.selectUpdateError);

  constructor(private location: Location, private store: Store, private route: ActivatedRoute) { }

  updateTask(body: TaskModel) {
    this.store.dispatch(fromStore.UpdateTaskBegin({ id: body.id, body }))
  }

  back() {
    this.location.back();
  }
}
