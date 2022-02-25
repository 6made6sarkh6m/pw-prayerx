import {put, takeLatest} from 'redux-saga/effects';
import {http} from '../../../services/httpClient';
import {
  addColumn,
  addColumnFailed,
  addColumnSuccess,
  deleteColumn,
  deleteColumnFailed,
  deleteColumnSuccess,
  getColumns,
  getColumnsFailed,
  getColumnsSuccess,
} from '.';
import {IAddColumn, IColumn} from './types';

export interface IAddColumnRequestProps {
  type: typeof addColumn.type;
  values: IAddColumn;
}

export interface IDeleteColumnRequestProps {
  type: typeof deleteColumn.type;
  columnId: number;
}

export function* loadColumns() {
  try {
    const request: {data: IColumn[]} = yield http.get('/columns/');
    yield put(getColumnsSuccess(request.data));
  } catch (e) {
    yield put(getColumnsFailed());
  }
}

export function* createColumn({values}: IAddColumnRequestProps) {
  try {
    const request: {data: IColumn} = yield http.post('/columns/', values);
    yield put(addColumnSuccess(request.data));
  } catch (e) {
    yield put(addColumnFailed());
    console.log('Error add column: ', e);
  }
}

export function* removeColumn({columnId}: IDeleteColumnRequestProps) {
  try {
    yield http.delete(`/columns/${columnId}`);
    yield put(deleteColumnSuccess(columnId));
  } catch (e) {
    yield put(deleteColumnFailed());
  }
}

export function* observeLoadColumns() {
  yield takeLatest(getColumns.type, loadColumns);
}

export function* observeCreateColumn() {
  yield takeLatest(addColumn.type, createColumn);
}

export function* observeRemoveColumn() {
  yield takeLatest(deleteColumn.type, removeColumn);
}
