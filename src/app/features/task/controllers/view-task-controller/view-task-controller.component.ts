import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import * as fromStore from "../../store";

@Component({
  selector: 'app-view-task-controller',
  templateUrl: './view-task-controller.component.html',
  styles: ':host {@apply block;}'
})
export class ViewTaskControllerComponent {
  data$ = this.store.select(fromStore.selectTaskList).pipe(
    map((list) => {
      return list?.filter(task => task.id === this.route.snapshot.params['id'])[0];
    }),
  );

  constructor(private store: Store, private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
  }

  back() {
    this.store.dispatch(fromStore.RemovePortalOutlet());
  }
}
