import {put, takeLatest} from 'redux-saga/effects';
import {http} from '../../../services/httpClient';
import {getColumns, getColumnsFailed, getColumnsSuccess} from '.';
import {IColumn} from './types';

export function* loadColumns() {
  try {
    const request: {data: IColumn[]} = yield http.get('/columns/');
    yield put(getColumnsSuccess(request.data));
    console.log('Request data: ' + request.data);
  } catch (e) {
    yield put(getColumnsFailed());
    console.log('request columns error: ', e);
  }
}

export function* observeLoadColumns() {
  yield takeLatest(getColumns.type, loadColumns);
}
