import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Board} from '../../screens/Board';

const Stack = createStackNavigator();

const UserNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            paddingRight: 20,
          },
        }}>
        <Stack.Screen name="My Desk" component={Board} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigation;
