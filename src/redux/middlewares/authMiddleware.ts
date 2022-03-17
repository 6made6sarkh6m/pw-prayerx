import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {REHYDRATE} from 'redux-persist/es/constants';
import {http} from '../../services/httpClient';
import {signInSuccess, signUpSuccess, signOut} from '../ducks/auth';

const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    if (
      action.type === signInSuccess.type ||
      action.type === signUpSuccess.type
    ) {
      action.payload?.token && http.addAuthHeader(action.payload.token);
    }

    if (action.type === REHYDRATE) {
      action.payload?.auth?.token &&
        http.addAuthHeader(action.payload.auth.token);
    }

    if (action.type === signOut.type) {
      http.removeAuthHeader();
    }
    return next(action);
  };

export default authMiddleware;
