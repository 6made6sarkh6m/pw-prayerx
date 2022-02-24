import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from '../../screens/SignIn';
import {SignUp} from '../../screens/SignUp';
import {AuthRoutes} from './routes';
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            paddingRight: 20,
          },
        }}>
        <Stack.Screen name={AuthRoutes.SignIn} component={SignIn} />
        <Stack.Screen name={AuthRoutes.SignUp} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
