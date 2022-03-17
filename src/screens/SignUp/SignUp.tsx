import {Button, Loader, Textinput} from '../../components/ui';
import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ISignUp, signUp} from '../../redux/ducks/auth';
import styled from 'styled-components/native';
import {Form} from 'react-final-form';
import {
  selectRequestStatus,
  selectErrormessage,
} from '../../redux/ducks/auth/selectors';
import {Text} from 'react-native';
import {REQUEST_STATUS} from '../../redux/ducks/types';
const SignUp = () => {
  const dispatch = useDispatch();

  const requestStatus = useSelector(selectRequestStatus);
  const errorMessage = useSelector(selectErrormessage);

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
      <Loader isLoading={requestStatus === REQUEST_STATUS.PENDING} />
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
