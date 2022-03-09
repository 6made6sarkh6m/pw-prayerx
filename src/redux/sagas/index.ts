import {all} from 'redux-saga/effects';
import {observeSignInSaga, observeSignUpSaga} from '../ducks/Auth/sagas';
import {
  observeLoadColumns,
  observeCreateColumn,
  observeRemoveColumn,
  observeChangeColumn,
} from '../ducks/Columns/sagas';
import {
  observeLoadPrayers,
  observeChangePrayer,
  observeCreatePrayer,
  observeDeletePrayer,
} from '../ducks/Prayers/sagas';
function* rootSaga() {
  yield all([
    observeSignInSaga(),
    observeSignUpSaga(),
    observeLoadColumns(),
    observeCreateColumn(),
    observeRemoveColumn(),
    observeChangeColumn(),
    observeCreatePrayer(),
    observeChangePrayer(),
    observeDeletePrayer(),
    observeLoadPrayers(),
  ]);
}

export default rootSaga;
