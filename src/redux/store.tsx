import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware().concat(sagaMiddleware),
});

export default store;

export type Store = ReturnType<typeof store.getState>;
