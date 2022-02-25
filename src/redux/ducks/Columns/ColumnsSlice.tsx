import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IColumn} from './types';

interface initialState {
  data: IColumn[];
  requestStatus: string;
}
const initialState: initialState = {
  data: [],
  requestStatus: 'idle',
};

const ColumnsSlice = createSlice({
  initialState: initialState,
  name: 'columns',
  reducers: {
    getColumns(state) {
      state.requestStatus = 'pending';
    },
    getColumnsSuccess(state, {payload}: PayloadAction<IColumn[]>) {
      state.data = payload;
      state.requestStatus = 'succeed';
    },
    getColumnsFailed(state) {
      state.requestStatus = 'failed';
    },
    addColumn(state) {
      state.requestStatus = 'pending';
    },
    addColumnSuccess(state, {payload}: PayloadAction<IColumn>) {
      state.data.push(payload);
      state.requestStatus = 'succeed';
    },
    addColumnFailed(state) {
      state.requestStatus = 'failed';
    },
    deleteColumn(state) {
      state.requestStatus = 'pending';
    },
    deleteColumnSuccess(state, {payload}: PayloadAction<number>) {
      const index = state.data.findIndex(column => column.id === payload);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
      state.requestStatus = 'succeed';
    },
    deleteColumnFailed(state) {
      state.requestStatus = 'failed';
    },
    updateColumn(state) {
      state.requestStatus = 'pending';
    },
    updateColumnSuccess(state, {payload}: PayloadAction<IColumn>) {
      const index = state.data.findIndex(column => column.id === payload.id);
      if (index !== -1) {
        state.data[index].title = payload.title;
        state.data[index].description = payload.description;
      }
      state.requestStatus = 'succeed';
    },
    updateColumnFailed(state) {
      state.requestStatus = 'failed';
    },
  },
});

export const {
  getColumns,
  getColumnsFailed,
  getColumnsSuccess,
  addColumn,
  addColumnFailed,
  addColumnSuccess,
  deleteColumn,
  deleteColumnFailed,
  deleteColumnSuccess,
  updateColumn,
  updateColumnFailed,
  updateColumnSuccess,
} = ColumnsSlice.actions;
export default ColumnsSlice.reducer;
