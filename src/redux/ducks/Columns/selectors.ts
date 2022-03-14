import {RootState} from '../../store';
import {createSelector} from '@reduxjs/toolkit';

export const selectColumns = (state: RootState) => state.columns.data;

export const selectColumnById = (id: number) =>
  createSelector(selectColumns, state =>
    state.find(column => column.id === id),
  );
export const selectRequestStatus = (state: RootState) =>
  state.columns.requestStatus;
export const selectErrormessage = (state: RootState) =>
  state.columns.errorMessage;
