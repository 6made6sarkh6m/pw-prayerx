export {
  default as AuthReducer,
  signIn,
  signInSuccess,
  signInFailed,
  signOut,
  signUp,
  signUpFailed,
  signUpSuccess,
} from './AuthSlice';

export type {
  ISignIn,
  ISignUp,
  IAuthSlice,
  ISignInResponse,
  ISignUpResponse,
} from './types';
