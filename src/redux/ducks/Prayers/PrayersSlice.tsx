import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {REQUEST_STATUS} from '../status';
import {IPrayer} from './types';

export interface InitialState {
  data: IPrayer[];
  requestStatus: string;
}

const initialState: InitialState = {
  data: [],
  requestStatus: REQUEST_STATUS.IDLE,
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
      console.log('get prayers succeed: ', state.data);
    },
    getPrayersFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
    },
    addPrayer(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    addPrayerSuccess(state, {payload}: PayloadAction<IPrayer>) {
      state.data.push(payload);
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      console.log('ADD SUCC');
    },
    addPrayerFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      console.log('ADD failed');
    },
    deletePrayer(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },
    deletePrayerSuccess(state, {payload}: PayloadAction<number>) {
      const index = state.data.findIndex(prayer => prayer.id === payload);
      if (index !== -1) state.data.splice(index, 1);
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      console.log('DELETE SUCCESS');
    },
    deletePrayerFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      console.log('DELETE FAIL');
    },
    updatePrayer(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
      console.log('UPDATE PENDING');
    },
    updatePrayerSuccess(state, {payload}: PayloadAction<IPrayer>) {
      const index = state.data.findIndex(prayer => prayer.id === payload.id);
      if (index !== -1) {
        state.data[index].title = payload.title;
        state.data[index].description = payload.description;
        state.data[index].checked = payload.checked;
      }
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      console.log('UPDATE SUCC');
    },
    updatePrayerFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      console.log('UPDATE FAIL');
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
