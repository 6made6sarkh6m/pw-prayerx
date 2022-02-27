import {IColumn} from '../Columns/types';

export interface IAuthSlice {
  token: string;
  name: string;
  email: string;
  requestStatus: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface ISignInResponse {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface ISignUpResponse {
  email: string;
  name: string;
  password: string;
  token: string;
  columns: IColumn[];
  id: number;
}
