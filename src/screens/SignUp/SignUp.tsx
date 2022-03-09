import Button from '../../components/ui/Button/Button';
import Textinput from '../../components/ui/Textinput/Textinput';
import React, {FC, useState} from 'react';
import {ISignUp} from '../../redux/ducks/Auth/types';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/ducks/Auth';
import styled from 'styled-components/native';
import {Form} from 'react-final-form';
import {View} from 'react-native';
const SignUp = () => {
  const dispatch = useDispatch();

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
