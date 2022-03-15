import {RootState} from '../../store';

export const selectToken = (state: RootState) => state.auth.token;
export const selectUsername = (state: RootState) => state.auth.name;
export const selectRequestStatus = (state: RootState) =>
  state.auth.requestStatus;
export const selectErrormessage = (state: RootState) => state.auth.errorMessage;
