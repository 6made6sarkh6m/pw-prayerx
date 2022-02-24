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
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Board" component={Board} />
        </Stack.Navigator>
      </NavigationContainer>
      <StyledButton text="Sign out" onPress={handleSignOut} />
    </>
  );
};

export default UserNavigation;
