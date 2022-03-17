import {ISignIn, ISignInResponse, ISignUpResponse, ISignUp} from './types';
import {put, takeLatest} from 'redux-saga/effects';
import {http} from '../../../services/httpClient';
import {
  signIn,
  signInFailed,
  signInSuccess,
  signUp,
  signUpFailed,
  signUpSuccess,
} from './index';

export interface ISignInAction {
  type: typeof signIn.type;
  values: ISignIn;
}

export interface ISignUpAction {
  type: typeof signUp.type;
  values: ISignUp;
}

export function* signUpSaga({values}: ISignUpAction) {
  try {
    const request: {data: ISignUpResponse} = yield http.post(
      '/auth/sign-up/',
      values,
    );
    if (request.data?.severity) {
      yield put(signUpFailed());
    } else {
      yield put(signUpSuccess(request.data));
    }
  } catch (e) {
    yield put(signUpFailed());
  }
}

export function* signInSaga({values}: ISignInAction) {
  try {
    const request: {data: ISignInResponse} = yield http.post(
      '/auth/sign-in/',
      values,
    );
    if (request.data?.message) {
      yield put(signInFailed());
    } else {
      yield put(signInSuccess(request.data));
    }
  } catch (e) {
    yield put(signInFailed());
  }
}

export function* observeSignUpSaga() {
  yield takeLatest(signUp.type, signUpSaga);
}

export function* observeSignInSaga() {
  yield takeLatest(signIn.type, signInSaga);
}
