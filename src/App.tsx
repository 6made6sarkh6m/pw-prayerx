import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persister} from './redux/store';
import BaseApp from './navigation/BaseApp';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <BaseApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
