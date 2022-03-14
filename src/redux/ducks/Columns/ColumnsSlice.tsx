import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IColumn} from './types';
import {REQUEST_STATUS} from '../types';

interface initialState {
  data: IColumn[];
  requestStatus: string;
  errorMessage: string;
}
const initialState: initialState = {
  data: [],
  requestStatus: REQUEST_STATUS.IDLE,
  errorMessage: '',
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
      state.errorMessage = '';
    },
    getColumnsFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't load data. Something went wrong`;
    },
    addColumn(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    addColumnSuccess(state, {payload}: PayloadAction<IColumn>) {
      state.data.push(payload);
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    addColumnFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't add a column. Something went wrong`;
    },
    deleteColumn(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    deleteColumnSuccess(state, {payload}: PayloadAction<number>) {
      const newState = state.data.filter(column => column.id !== payload);
      state.data = newState;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    deleteColumnFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't delete a column. Something went wrong`;
    },
    updateColumn(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    updateColumnSuccess(state, {payload}: PayloadAction<IColumn>) {
      const index = state.data.findIndex(column => column.id === payload.id);
      if (index !== -1) {
        state.data[index] = payload;
      }
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    updateColumnFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't update a column. Something went wrong`;
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
