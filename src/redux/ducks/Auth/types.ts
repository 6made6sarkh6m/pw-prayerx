export interface IAuthSlice {
  token: string;
  username: string;
  email: string;
  requestStatus: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  username: string;
  email: string;
  password: string;
}

export interface ISignInResponse {
  id: number;
  email: string;
  username: string;
  token: string;
}

export interface ISignUpResponse {
  email: string;
  username: string;
  password: string;
  token: string;
  columns: any;
  id: number;
}
