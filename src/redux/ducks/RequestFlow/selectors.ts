import {RootState} from '../../store';

export const selectLoading = (state: RootState) => state.requestFlow.isLoading;

export const selectErrorMessage = (state: RootState) =>
  state.requestFlow.errorMessage;
