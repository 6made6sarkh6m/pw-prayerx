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
      console.log('column list: ', state.data);
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
  },
});

export const {
  getColumns,
  getColumnsFailed,
  getColumnsSuccess,
  addColumn,
  addColumnFailed,
  addColumnSuccess,
} = ColumnsSlice.actions;
export default ColumnsSlice.reducer;
