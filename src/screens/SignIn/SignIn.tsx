import StyledButton from '../../components/ui/StyledButton/StyledButton';
import StyledTextInput from '../../components/ui/StyledTextInput/StyledTextInput';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUpScreenProps} from '../../interfaces/navigator';
import {useDispatch} from 'react-redux';
import {ISignIn} from '../../redux/ducks/Auth/types';
import {signIn} from '../../redux/ducks/Auth';
import styled from 'styled-components/native';
const SignIn = ({navigation}: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignInPress = (values: ISignIn) => {
    dispatch({type: signIn.type, values});
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };
  return (
    <Root>
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
        text="Sign in"
        onPress={() => handleSignInPress({email, password})}
      />
      <StyledButton
        text="Press to sign up"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </Root>
  );
};

const Root = styled.View`
  align-items: center;
  padding: 20px;
`;

export default SignIn;
