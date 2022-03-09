import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Board} from '../../screens/Board';
import {AddColumn} from '../../screens/AddColumn';
import {ROUTES} from './routes';
import {Column} from '../../screens/Column';
import {ColumnSettings} from '../../screens/ColumnSettings';
const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen name={ROUTES.BOARD} component={Board} />
          <Stack.Screen name={ROUTES.ADDCOLUMN} component={AddColumn} />
          <Stack.Screen name={ROUTES.COLUMN} component={Column} />
          <Stack.Screen
            name={ROUTES.COLUMN_SETTINGS}
            component={ColumnSettings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default UserNavigation;
