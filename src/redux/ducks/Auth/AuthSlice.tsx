import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthSlice, ISignInResponse, ISignUpResponse} from './types';

const initialState: IAuthSlice = {
  token: '',
  username: '',
  email: '',
  requestStatus: 'idle',
};

const AuthSlice = createSlice({
  initialState: initialState,
  name: 'auth',
  reducers: {
    signIn(state) {
      state.requestStatus = 'pending';
    },
    signInSuccess(state, {payload}: PayloadAction<ISignInResponse>) {
      state.token = payload.token;
      state.username = payload.username;
      state.email = payload.email;
    },
    signInFailed(state) {
      state.requestStatus = 'failed';
    },
    signOut(state) {
      state.token = '';
      state.username = '';
      state.email = '';
    },
    signUp(state) {
      state.requestStatus = 'pending';
    },
    signUpSuccess(state, {payload}: PayloadAction<ISignUpResponse>) {
      state.token = payload.token;
      state.username = payload.username;
      state.email = payload.email;
      state.requestStatus = 'succeed';
    },
    signUpFailed(state) {
      state.requestStatus = 'failed';
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
