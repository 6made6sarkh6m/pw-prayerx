import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectPrayers = (state: RootState) => state.prayers.data;

export const selectPrayersByColumnId = (columnId: number) =>
  createSelector(selectPrayers, state =>
    state.filter(prayer => prayer.columnId === columnId),
  );

export const selectPrayerById = (prayerId: number) =>
  createSelector(selectPrayers, state =>
    state.find(prayer => prayer.id === prayerId),
  );

export const selectRequestStatus = (state: RootState) =>
  state.prayers.requestStatus;

export const selectErrormessage = (state: RootState) =>
  state.prayers.errorMessage;
