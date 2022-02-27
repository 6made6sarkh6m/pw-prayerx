import {RootState} from '../../store';
import {createSelector} from '@reduxjs/toolkit';

export const selectColumns = (state: RootState) => state.columns.data;

export const selectColumnById = (id: number) => {
  createSelector(selectColumns, state =>
    state.filter(column => column.id === id),
  );
};
