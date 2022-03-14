import {all} from 'redux-saga/effects';

import {observeSignInSaga, observeSignUpSaga} from '../ducks/auth/sagas';

import {
  observeLoadColumns,
  observeCreateColumn,
  observeRemoveColumn,
  observeChangeColumn,
} from '../ducks/columns/sagas';

import {
  observeLoadPrayers,
  observeChangePrayer,
  observeCreatePrayer,
  observeDeletePrayer,
} from '../ducks/prayers/sagas';

import {
  observeLoadComments,
  observeCreateComment,
  observeRemoveComment,
} from '../ducks/comments/sagas';

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
