import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IColumn} from './types';
import {REQUEST_STATUS} from '../types';

interface initialState {
  data: IColumn[];
  requestStatus: string;
}
const initialState: initialState = {
  data: [],
  requestStatus: REQUEST_STATUS.IDLE,
};

const ColumnsSlice = createSlice({
  initialState: initialState,
  name: 'columns',
  reducers: {
    getColumns(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    getColumnsSuccess(state, {payload}: PayloadAction<IColumn[]>) {
      state.data = payload;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
    },
    getColumnsFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
    },
    addColumn(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    addColumnSuccess(state, {payload}: PayloadAction<IColumn>) {
      state.data.push(payload);
      state.requestStatus = REQUEST_STATUS.SUCCEED;
    },
    addColumnFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
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
