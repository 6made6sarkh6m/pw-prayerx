import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IRequestFlow} from './types';

const initialState: IRequestFlow = {
  isLoading: false,
  errorMessage: '',
};

const RequestFlowSlice = createSlice({
  name: 'requestFlow',
  initialState: initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setErrorMessage(state, {payload}: PayloadAction<string>) {
      state.errorMessage = payload;
    },
    unsetErrorMessage(state) {
      state.errorMessage = '';
    },
  },
});

export const {startLoading, stopLoading, setErrorMessage, unsetErrorMessage} =
  RequestFlowSlice.actions;

export default RequestFlowSlice.reducer;
