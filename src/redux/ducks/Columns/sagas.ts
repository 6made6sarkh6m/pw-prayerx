import {put, takeLatest} from 'redux-saga/effects';
import {http} from '../../../services/httpClient';
import {
  addColumn,
  addColumnFailed,
  addColumnSuccess,
  getColumns,
  getColumnsFailed,
  getColumnsSuccess,
} from '.';
import {IAddColumn, IColumn} from './types';

export interface IAddColumnRequestProps {
  type: typeof addColumn.type;
  values: IAddColumn;
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

export function* observeLoadColumns() {
  yield takeLatest(getColumns.type, loadColumns);
}

export function* observeCreateColumn() {
  yield takeLatest(addColumn.type, createColumn);
}
