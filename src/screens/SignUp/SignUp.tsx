import {Button, Loader, Textinput} from '../../components/ui';
import React, {FC, useState} from 'react';
import {ISignUp} from '../../redux/ducks/Auth/types';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../redux/ducks/Auth';
import styled from 'styled-components/native';
import {Form} from 'react-final-form';
import {Text} from 'react-native';
import {
  selectLoading,
  selectErrorMessage,
} from '../../redux/ducks/RequestFlow/selectors';

const SignUp = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectErrorMessage);

  const onSubmit = (values: ISignUp) => {
    dispatch({type: signUp.type, values});
  };

  return (
    <Root>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <FieldWrap>
            <Textinput name="email" placeholder="Email" />
            <Textinput name="name" placeholder="Username" />
            <Textinput name="password" placeholder="Password" />
            <Button text="Sign up" onPress={handleSubmit} />
          </FieldWrap>
        )}
      />
      {isLoading && <Loader isLoading={isLoading} />}
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

export default SignUp;
