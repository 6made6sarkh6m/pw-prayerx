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

import {
  observeLoadComments,
  observeCreateComment,
  observeRemoveComment,
} from '../ducks/Comments/sagas';

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
    observeLoadComments(),
    observeCreateComment(),
    observeRemoveComment(),
  ]);
}

export default rootSaga;
