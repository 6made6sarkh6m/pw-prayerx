import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import {COLORS} from './styles/colors';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import store, {persister} from './redux/store';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>
          <View style={styles.root}>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: 'center',
                headerRightContainerStyle: {
                  paddingRight: 20,
                },
              }}>
              <Stack.Screen name={'SignIn'} component={SignIn} />
              <Stack.Screen name={'SignUp'} component={SignUp} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
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
