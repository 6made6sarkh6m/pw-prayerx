import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import createSagaMiddleware from '@redux-saga/core';
import {persistStore, persistReducer, REHYDRATE} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthReducer} from './ducks/auth';
import {ColumnsReducer} from './ducks/columns';
import {PrayersReducer} from './ducks/prayers';
import {CommentsReducer} from './ducks/comments';
import {RequestFlowReducer} from './ducks/RequestFlow';
import authMiddleware from './middlewares/authMiddleware';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  columns: ColumnsReducer,
  prayers: PrayersReducer,
  comments: CommentsReducer,
  requestFlow: RequestFlowReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persister = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
