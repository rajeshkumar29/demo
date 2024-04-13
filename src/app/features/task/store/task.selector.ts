import { createFeatureSelector, createSelector } from '@ngrx/store';

import { taskFeatureKey, State } from './task.reducer';

const selectState = createFeatureSelector<State>(taskFeatureKey);

export const selectTaskList = createSelector(selectState, state => state.tasks);
export const selectIsFetchListPending = createSelector(selectState, state => state.isFetchListPending);
export const selectFetchListError = createSelector(selectState, state => state.fetchListError);
export const selectIsAddPending = createSelector(selectState, state => state.isAddPending);
export const selectAddError = createSelector(selectState, state => state.addError);
export const selectIsUpdatePending = createSelector(selectState, state => state.isUpdatePending);
export const selectUpdateError = createSelector(selectState, state => state.updateError);
export const selectIsDeletePending = createSelector(selectState, state => state.isDeletePending);
export const selectDeleteError = createSelector(selectState, state => state.deleteError);

