import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import createSagaMiddleware from '@redux-saga/core';
import {persistStore, persistReducer, REHYDRATE} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
<<<<<<< HEAD
<<<<<<< HEAD
import {AuthReducer} from './ducks/Auth';
import {ColumnsReducer} from './ducks/Columns';
import {PrayersReducer} from './ducks/Prayers';
import {CommentsReducer} from './ducks/Comments';
import {RequestFlowReducer} from './ducks/RequestFlow';
=======
=======
>>>>>>> 6fdd64ba170577b595b16e7be84a9cd5a9d3e3eb
import {AuthReducer} from './ducks/auth';
import {ColumnsReducer} from './ducks/columns';
import {PrayersReducer} from './ducks/prayers';
import {CommentsReducer} from './ducks/comments';
<<<<<<< HEAD
>>>>>>> feature/prayer-details
=======
>>>>>>> 6fdd64ba170577b595b16e7be84a9cd5a9d3e3eb
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
