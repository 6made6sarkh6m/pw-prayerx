import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {selectToken} from '../redux/ducks/Auth/selectors';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserNavigation from './UserNavigation/UserNavigation';
const Stack = createStackNavigator();

const BaseApp = () => {
  const isToken = useSelector(selectToken);
  return isToken ? <UserNavigation /> : <AuthNavigation />;
};

export default BaseApp;
