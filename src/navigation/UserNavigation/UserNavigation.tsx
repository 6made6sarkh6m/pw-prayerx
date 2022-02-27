import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Board} from '../../screens/Board';
import {Button} from '../../components/ui/Button';
import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/ducks/Auth';
import {AddColumn} from '../../screens/AddColumn';
import {AppRoutes} from './routes';
import {Column} from '../../screens/Column';
import {ColumnSettings} from '../../screens/ColumnSettings';
const Stack = createStackNavigator();

const UserNavigation = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch({type: signOut.type});
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen name={AppRoutes.Board} component={Board} />
          <Stack.Screen name={AppRoutes.AddColumn} component={AddColumn} />
          <Stack.Screen name={AppRoutes.Column} component={Column} />
          <Stack.Screen
            name={AppRoutes.ColumnSettings}
            component={ColumnSettings}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Button text="Sign out" onPress={handleSignOut} />
    </>
  );
};

export default UserNavigation;
