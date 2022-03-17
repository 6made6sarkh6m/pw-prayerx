import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthSlice, ISignInResponse, ISignUpResponse} from './types';
import {REQUEST_STATUS} from '../types';
const initialState: IAuthSlice = {
  token: '',
  name: '',
  email: '',
  requestStatus: REQUEST_STATUS.IDLE,
  errorMessage: '',
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
      state.errorMessage = '';
    },
    signInFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't sign in. Please try again later`;
    },
    signOut(state) {
      state.token = initialState.token;
      state.name = initialState.name;
      state.email = initialState.email;
      state.requestStatus = initialState.requestStatus;
      state.errorMessage = '';
    },
    signUp(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    signUpSuccess(state, {payload}: PayloadAction<ISignUpResponse>) {
      state.token = payload.token;
      state.name = payload.name;
      state.email = payload.email;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    signUpFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't sign up. Please try again later`;
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
