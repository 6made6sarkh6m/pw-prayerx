import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Board} from '../../screens/Board';
import {StyledButton} from '../../components/ui/StyledButton';
import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/ducks/Auth';
const Stack = createStackNavigator();

const UserNavigation = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch({type: signOut.type});
  };
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
      <StyledButton text="Sign out" onPress={handleSignOut} />
    </NavigationContainer>
  );
};

export default UserNavigation;
