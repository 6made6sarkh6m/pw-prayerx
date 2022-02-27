import React from 'react';
import {useSelector} from 'react-redux';
import {selectToken} from '../redux/ducks/Auth/selectors';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import UserNavigation from './UserNavigation/UserNavigation';

const BaseApp = () => {
  const isToken = useSelector(selectToken);
  return isToken ? <UserNavigation /> : <AuthNavigation />;
};

export default BaseApp;
