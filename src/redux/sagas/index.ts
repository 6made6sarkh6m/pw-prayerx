import {all} from 'redux-saga/effects';
import {observeSignInSaga, observeSignUpSaga} from '../ducks/Auth/sagas';
import {
  observeLoadColumns,
  observeCreateColumn,
  observeRemoveColumn,
  observeChangeColumn,
} from '../ducks/Columns/sagas';

function* rootSaga() {
  yield all([
    observeSignInSaga(),
    observeSignUpSaga(),
    observeLoadColumns(),
    observeCreateColumn(),
    observeRemoveColumn(),
    observeChangeColumn(),
  ]);
}

export default rootSaga;
