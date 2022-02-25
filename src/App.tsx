import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from './constants/colors';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persister} from './redux/store';
import BaseApp from './navigation/BaseApp';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <View style={styles.root}>
          <BaseApp />
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: `${COLORS.lightGrey}`,
  },
});
export default App;
