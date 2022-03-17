import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {REQUEST_STATUS} from '../types';
import {IPrayer} from './types';

export interface InitialState {
  data: IPrayer[];
  requestStatus: string;
  errorMessage: string;
}

const initialState: InitialState = {
  data: [],
  requestStatus: REQUEST_STATUS.IDLE,
  errorMessage: '',
};

const PrayersSlice = createSlice({
  initialState: initialState,
  name: 'prayers',
  reducers: {
    getPrayers(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    getPrayersSuccess(state, {payload}: PayloadAction<IPrayer[]>) {
      state.data = payload;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    getPrayersFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't load data. Something went wrong;`;
    },
    addPrayer(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    addPrayerSuccess(state, {payload}: PayloadAction<IPrayer>) {
      state.data.push(payload);
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    addPrayerFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't add a Prayer. Something went wrong`;
    },
    deletePrayer(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    deletePrayerSuccess(state, {payload}: PayloadAction<number>) {
      const newState = state.data.filter(prayer => prayer.id !== payload);
      state.data = newState;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    deletePrayerFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't delete a prayer. Something went wrong`;
    },
    updatePrayer(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    updatePrayerSuccess(state, {payload}: PayloadAction<IPrayer>) {
      const index = state.data.findIndex(prayer => prayer.id === payload.id);
      if (index !== -1) {
        state.data[index] = payload;
      }
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = '';
    },
    updatePrayerFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't update a prayer. Something went wrong`;
    },
  },
});

export const {
  getPrayers,
  getPrayersFailed,
  getPrayersSuccess,
  addPrayer,
  addPrayerFailed,
  addPrayerSuccess,
  updatePrayer,
  updatePrayerFailed,
  updatePrayerSuccess,
  deletePrayer,
  deletePrayerFailed,
  deletePrayerSuccess,
} = PrayersSlice.actions;

export default PrayersSlice.reducer;
