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
  updateColumn,
  updateColumnFailed,
  updateColumnSuccess,
} from '.';
import {
  startLoading,
  stopLoading,
  setErrorMessage,
  unsetErrorMessage,
} from '../RequestFlow';
import {IAddColumn, IColumn, IUdateColumn} from './types';

export interface IAddColumnRequestProps {
  type: typeof addColumn.type;
  values: IAddColumn;
}

export interface IDeleteColumnRequestProps {
  type: typeof deleteColumn.type;
  columnId: number;
}

export interface IUpdateColumnRequestProps {
  type: typeof updateColumn.type;
  data: IUdateColumn;
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
  yield put(startLoading());
  try {
    const request: {data: IColumn} = yield http.post('/columns/', values);
    yield put(addColumnSuccess(request.data));
    yield put(unsetErrorMessage());
  } catch (e) {
    yield put(addColumnFailed());
    yield put(setErrorMessage('Something went wrong'));
  } finally {
    yield put(stopLoading());
  }
}

export function* removeColumn({columnId}: IDeleteColumnRequestProps) {
  yield put(startLoading());
  try {
    yield http.delete(`/columns/${columnId}`);
    yield put(deleteColumnSuccess(columnId));
    yield put(unsetErrorMessage());
  } catch (e) {
    yield put(deleteColumnFailed());
    yield put(setErrorMessage('Something went wrong'));
  } finally {
    yield put(stopLoading());
  }
}

export function* changeColumn({data}: IUpdateColumnRequestProps) {
  yield put(startLoading());
  try {
    const request: {data: IColumn} = yield http.put(
      `/columns/${data.columnId}`,
      data.values,
    );

    yield put(updateColumnSuccess(request.data));
    yield put(unsetErrorMessage());
  } catch (e) {
    yield put(updateColumnFailed());
    yield put(setErrorMessage('Something went wrong'));
  } finally {
    yield put(stopLoading());
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

export function* observeChangeColumn() {
  yield takeLatest(updateColumn.type, changeColumn);
}
