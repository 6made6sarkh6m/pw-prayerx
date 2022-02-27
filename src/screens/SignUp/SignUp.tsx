import StyledButton from '../../components/ui/StyledButton/StyledButton';
import StyledTextInput from '../../components/ui/StyledTextInput/StyledTextInput';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ISignUp} from '../../redux/ducks/Auth/types';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/ducks/Auth';
import styled from 'styled-components/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSignUpPress = (values: ISignUp) => {
    dispatch({type: signUp.type, values});
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  return (
    <Root>
      <StyledTextInput
        value={name}
        setValue={e => handleChangeName(e)}
        placeholder="Username"
      />
      <StyledTextInput
        value={email}
        setValue={e => handleChangeEmail(e)}
        placeholder="Email"
      />
      <StyledTextInput
        value={password}
        setValue={e => handleChangePassword(e)}
        placeholder="Password"
        secureTextEntry
      />

      <StyledButton
        text="Sign up"
        onPress={() => handleSignUpPress({email, name, password})}
      />
    </Root>
  );
};

const Root = styled.View`
  align-items: center;
  padding: 20px;
`;

export default SignUp;
