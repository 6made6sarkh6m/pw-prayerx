import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthSlice, ISignInResponse, ISignUpResponse} from './types';
import {REQUEST_STATUS} from '../status';
const initialState: IAuthSlice = {
  token: '',
  name: '',
  email: '',
  requestStatus: REQUEST_STATUS.IDLE,
};

const AuthSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {
    signIn(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    signInSuccess(state, {payload}: PayloadAction<ISignInResponse>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
    },
    signInFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
    },
    signOut(state) {
      state.token = '';
      state.name = '';
      state.email = '';
    },
    signUp(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    signUpSuccess(state, {payload}: PayloadAction<ISignUpResponse>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
    },
    signUpFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
    },
  },
});

export const {
  signIn,
  signInSuccess,
  signInFailed,
  signOut,
  signUp,
  signUpSuccess,
  signUpFailed,
} = AuthSlice.actions;
export default AuthSlice.reducer;
