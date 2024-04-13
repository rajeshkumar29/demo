import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./task.actions";
import { TaskModel } from "../../../models";

export const taskFeatureKey = 'task';

export interface State {
    tasks: TaskModel[] | null,
    isFetchListPending: boolean,
    fetchListError: string,

    isAddPending: boolean;
    addError: string;

    isUpdatePending: boolean;
    updateError: string;

    isDeletePending: boolean;
    deleteError: string;
}

const initialState: State = {
    tasks: null,
    isFetchListPending: false,
    fetchListError: '',

    isAddPending: false,
    addError: '',

    isUpdatePending: false,
    updateError: '',

    isDeletePending: false,
    deleteError: '',
};

export const reducer = createReducer(
    initialState,
    on(fromActions.FetchTaskListBegin, (state) => ({ ...state, isFetchListPending: true, fetchListError: '' })),
    on(fromActions.FetchTaskListFail, (state, props) => ({ ...state, isFetchListPending: false, fetchListError: props.error })),
    on(fromActions.FetchTaskListSuccess, (state, props) => ({ ...state, isFetchListPending: false, fetchListError: '', tasks: props.response })),

    on(fromActions.AddTaskBegin, (state) => ({ ...state, isAddPending: true, addError: '' })),
    on(fromActions.AddTaskFail, (state, props) => ({ ...state, isAddPending: false, addError: props.error })),
    on(fromActions.AddTaskSuccess, (state, props) => ({ ...state, isAddPending: false, addError: '' })),

    on(fromActions.UpdateTaskBegin, (state) => ({ ...state, isUpdatePending: true, updateError: '' })),
    on(fromActions.UpdateTaskFail, (state, props) => ({ ...state, isUpdatePending: false, updateError: props.error })),
    on(fromActions.UpdateTaskSuccess, (state, props) => ({ ...state, isUpdatePending: false, updateError: '' })),

    on(fromActions.DeleteTaskBegin, (state) => ({ ...state, isDeletePending: true, deleteError: '' })),
    on(fromActions.DeleteTaskFail, (state, props) => ({ ...state, isDeletePending: false, deleteError: props.error })),
    on(fromActions.DeleteTaskSuccess, (state, props) => ({ ...state, isDeletePending: false, deleteError: '' })),
);
