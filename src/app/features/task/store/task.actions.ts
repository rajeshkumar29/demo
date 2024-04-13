import { createAction, props } from "@ngrx/store";

export const RemovePortalOutlet = createAction('[Task] Remove Portal Outlet');

export const FetchTaskListBegin = createAction('[Task] Fetch Task List Begin');
export const FetchTaskListFail = createAction('[Task] Fetch Task List Fail', props<{ error: string }>());
export const FetchTaskListSuccess = createAction('[Task] Fetch Task List Success', props<{ response: any }>());

export const FetchTaskBegin = createAction('[Task] Fetch Task Begin', props<{ id: string }>());
export const FetchTaskFail = createAction('[Task] Fetch Task Fail', props<{ error: string }>());
export const FetchTaskSuccess = createAction('[Task] Fetch Task Success', props<{ response: string }>());

export const AddTaskBegin = createAction('[Task] Add Task Begin', props<{ body: any }>());
export const AddTaskFail = createAction('[Task] Add Task Fail', props<{ error: any }>());
export const AddTaskSuccess = createAction('[Task] Add Task Success', props<{ response: any }>());

export const UpdateTaskBegin = createAction('[Task] Update Task Begin', props<{ body: any, id: string }>());
export const UpdateTaskFail = createAction('[Task] Update Task Fail', props<{ error: any }>());
export const UpdateTaskSuccess = createAction('[Task] Update Task Success', props<{ response: any }>());

export const DeleteTaskBegin = createAction('[Task] Delete Task Begin', props<{ id: string }>());
export const DeleteTaskFail = createAction('[Task] Delete Task Fail', props<{ error: string }>());
export const DeleteTaskSuccess = createAction('[Task] Delete Task Success', props<{ response: any }>());
