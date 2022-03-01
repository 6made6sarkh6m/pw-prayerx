import axios, {AxiosError, AxiosInstance} from 'axios';
import store from '../redux/store';
import {signOut} from '../redux/ducks/Auth';
import {REACT_APP_API_BASE_URL} from '../constants';
export class httpClient {
  constructor(private readonly _axios: AxiosInstance) {
    this.useInterceptors();
  }

  private useInterceptors(): void {
    this._axios.interceptors.response.use(
      undefined,
      (error: AxiosError): Promise<AxiosError> => {
        if (error.response?.status === 401) {
          store.dispatch(signOut());
        }
        return Promise.reject(error.response?.data);
      },
    );
  }

  addAuthHeader(token: string): void {
    this._axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  removeAuthHeader(): void {
    delete this._axios.defaults.headers.Authorization;
  }
  get get() {
    return this._axios.get;
  }

  get post() {
    return this._axios.post;
  }

  get put() {
    return this._axios.put;
  }

  get patch() {
    return this._axios.patch;
  }
  get delete() {
    return this._axios.delete;
  }

  get request() {
    return this._axios.request;
  }

  get axios(): AxiosInstance {
    return this._axios;
  }
}
export const http = new httpClient(
  axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  }),
);
