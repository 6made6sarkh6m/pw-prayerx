import {all} from 'redux-saga/effects';
import {observeSignInSaga, observeSignUpSaga} from '../ducks/Auth/sagas';

function* rootSaga() {
  yield all([observeSignInSaga(), observeSignUpSaga()]);
}

export default rootSaga;
