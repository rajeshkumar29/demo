import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { catchError, exhaustMap, filter, map, switchMap, tap } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as fromActions from "./task.actions";
import { TaskService } from "../../../services";
import { ConfirmDeleteTaskComponent } from "../components";

@Injectable()
export class TaskEffects {
    /**
     * Fetch task list
     */
    fetchTaskListBegin$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.FetchTaskListBegin),
        exhaustMap(_ => this.taskService.fetchList()),
        map(response => fromActions.FetchTaskListSuccess({ response })),
        catchError((error, caught) => {
            this.store.dispatch(fromActions.FetchTaskListFail({ error }));
            return caught;
        }),
    ));

    /**
     * add task
     */
    addTaskBegin$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.AddTaskBegin),
        exhaustMap(payload => this.taskService.create(payload.body)),
        map(response => fromActions.AddTaskSuccess({ response })),
        catchError((error, caught) => {
            this.store.dispatch(fromActions.AddTaskFail({ error }));
            return caught;
        })
    ));

    /**
     * update task
     */
    updateTaskBegin$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.UpdateTaskBegin),
        exhaustMap(payload => this.taskService.update(payload.id, payload.body)),
        map(response => fromActions.UpdateTaskSuccess({ response })),
        catchError((error, caught) => {
            this.store.dispatch(fromActions.UpdateTaskFail({ error }));
            return caught;
        })
    ));

    /**
     * delete task
     */
    deleteTaskBegin$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.DeleteTaskBegin),
        switchMap(payload => {
            const dialog = this.dialog.open(ConfirmDeleteTaskComponent, {
                data: { id: payload.id },
            });
            return dialog.afterClosed();
        }),
        filter(id => !!id),
        exhaustMap(payload => {
            console.log({ payload });
            return this.taskService.delete(payload.id);
        }),
        map(response => fromActions.DeleteTaskSuccess({ response })),
        catchError((error, caught) => {
            this.store.dispatch(fromActions.DeleteTaskFail({ error }));
            return caught;
        })
    ));

    /**
     * redirect back to task list
     */
    redirectAfterSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.AddTaskSuccess, fromActions.UpdateTaskSuccess, fromActions.DeleteTaskSuccess),
        tap(() => this.router.navigate(['/task/list'])),
    ), { dispatch: false });

    /**
     * remove outlet route
     */
    removePortalOutlet$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.RemovePortalOutlet),
        tap(_ => {
            this.router.navigate([{ outlets: { aside: null } }], { relativeTo: this.route.children[0], queryParamsHandling: 'preserve' });
        }),
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private taskService: TaskService,
        private store: Store,
        private router: Router,
        private route: ActivatedRoute,
        private dialog: MatDialog,
    ) { }
}
