import Button from '../../components/ui/Button/Button';
import Textinput from '../../components/ui/Textinput/Textinput';
import React, {FC, useState} from 'react';
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
      <Textinput
        value={name}
        setValue={e => handleChangeName(e)}
        placeholder="Username"
      />
      <Textinput
        value={email}
        setValue={e => handleChangeEmail(e)}
        placeholder="Email"
      />
      <Textinput
        value={password}
        setValue={e => handleChangePassword(e)}
        placeholder="Password"
        secureTextEntry
      />

      <Button
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
