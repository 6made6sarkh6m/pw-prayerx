import {Button, Loader, Textinput} from '../../components/ui';
import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ISignIn} from '../../redux/ducks/Auth/types';
import {signIn} from '../../redux/ducks/Auth';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {ROUTES} from '../../navigation/AuthNavigation/routes';
import styled from 'styled-components/native';
import {Form} from 'react-final-form';
import {
  selectErrorMessage,
  selectLoading,
} from '../../redux/ducks/RequestFlow/selectors';
import {Text} from 'react-native';

type SignInScreenProps = StackNavigationProp<RootStackParamList, 'SignIn'>;
type NavProp = {
  navigation: SignInScreenProps;
};
const SignIn = ({navigation}: NavProp) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectErrorMessage);
  const onSubmit = (values: ISignIn) => {
    dispatch({type: signIn.type, values});
  };

  return (
    <Root>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <FieldWrap>
            <Textinput name="email" placeholder="Email" />
            <Textinput name="password" placeholder="Password" secureTextEntry />
            <Button text="Sign in" onPress={handleSubmit} />
          </FieldWrap>
        )}
      />
      <Button
        text="Press to sign up"
        onPress={() => {
          navigation.navigate(ROUTES.SIGNUP);
        }}
      />

      <Loader isLoading={isLoading} />
      <Text>{errorMessage}</Text>
    </Root>
  );
};

const Root = styled.View`
  align-items: center;
  padding: 20px;
`;

const FieldWrap = styled.View`
  width: 100%;
  flex-grow: 1;
`;

export default SignIn;
