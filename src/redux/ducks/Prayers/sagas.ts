import {put, takeLatest, takeLeading} from 'redux-saga/effects';
import {http} from '../../../services/httpClient';
import {IPrayer, IAddPrayer, IUpdatePrayer} from './types';
import {
  getPrayers,
  getPrayersFailed,
  getPrayersSuccess,
  addPrayer,
  addPrayerFailed,
  addPrayerSuccess,
  updatePrayer,
  updatePrayerFailed,
  updatePrayerSuccess,
  deletePrayer,
  deletePrayerFailed,
  deletePrayerSuccess,
} from '.';
export interface IAddPrayerRequestProps {
  type: typeof addPrayer.type;
  data: IAddPrayer;
}
export interface IDeletePrayerRequestProps {
  type: typeof deletePrayer.type;
  prayerId: number;
}
export interface IUpdatePrayerRequestProps {
  type: typeof updatePrayer.type;
  values: IUpdatePrayer;
}

export function* loadPrayers() {
  try {
    const request: {data: IPrayer[]} = yield http.get('/prayers/');
    yield put(getPrayersSuccess(request.data));
  } catch (e) {
    yield put(getPrayersFailed());
  }
}

export function* createPrayer({data}: IAddPrayerRequestProps) {
  try {
    const request: {data: IPrayer} = yield http.post(
      `/columns/${data.columnId}/prayers`,
      data.values,
    );
    yield put(addPrayerSuccess(request.data));
  } catch (e) {
    yield put(addPrayerFailed());
  }
}

export function* removePrayer({prayerId}: IDeletePrayerRequestProps) {
  try {
    yield http.delete(`/prayers/${prayerId}`);
    yield put(deletePrayerSuccess(prayerId));
  } catch (e: any) {
    yield put(deletePrayerFailed());
    console.log('ERROR DELETE PRAYER: ', e);
  }
}

export function* changePrayer({values}: IUpdatePrayerRequestProps) {
  try {
    const request: {data: IPrayer} = yield http.put(
      `/prayers/${values.id}`,
      values,
    );
    yield put(updatePrayerSuccess(request.data));
  } catch (e) {
    yield put(updatePrayerFailed());
  }
}

export function* observeLoadPrayers() {
  yield takeLatest(getPrayers.type, loadPrayers);
}

export function* observeCreatePrayer() {
  yield takeLatest(addPrayer.type, createPrayer);
}

export function* observeDeletePrayer() {
  yield takeLatest(deletePrayer.type, removePrayer);
}

export function* observeChangePrayer() {
  yield takeLatest(updatePrayer.type, changePrayer);
}
