import {all} from 'redux-saga/effects';
import {observeSignInSaga, observeSignUpSaga} from '../ducks/Auth/sagas';
import {observeLoadColumns} from '../ducks/Columns/sagas';

function* rootSaga() {
  yield all([observeSignInSaga(), observeSignUpSaga(), observeLoadColumns()]);
}

export default rootSaga;
