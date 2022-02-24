import {all} from 'redux-saga/effects';
import {observeSignInSaga, observeSignUpSaga} from '../ducks/Auth/sagas';
import {observeLoadColumns, observeCreateColumn} from '../ducks/Columns/sagas';

function* rootSaga() {
  yield all([
    observeSignInSaga(),
    observeSignUpSaga(),
    observeLoadColumns(),
    observeCreateColumn(),
  ]);
}

export default rootSaga;
