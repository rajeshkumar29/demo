import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from "../../store";

@Component({
  selector: 'app-list-task-controller',
  templateUrl: './list-task-controller.component.html',
  styles: ':host {@apply block my-6}',
})
export class ListTaskControllerComponent {
  data$ = this.store.select(fromStore.selectTaskList);
  isFetchListPending$ = this.store.select(fromStore.selectIsFetchListPending);
  fetchListError$ = this.store.select(fromStore.selectFetchListError);
  isDeletePending$ = this.store.select(fromStore.selectIsAddPending);
  deleteError$ = this.store.select(fromStore.selectDeleteError);

  constructor(private store: Store) {
    this.store.dispatch(fromStore.FetchTaskListBegin());
  }

  delete(id: string) {
    this.store.dispatch(fromStore.DeleteTaskBegin({ id }));
  }
}
