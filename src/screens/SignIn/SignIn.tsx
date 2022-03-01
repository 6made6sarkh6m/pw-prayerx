import Button from '../../components/ui/Button/Button';
import Textinput from '../../components/ui/Textinput/Textinput';
import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ISignIn} from '../../redux/ducks/Auth/types';
import {signIn} from '../../redux/ducks/Auth';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {ROUTES} from '../../navigation/AuthNavigation/routes';
import styled from 'styled-components/native';

type SignInScreenProps = StackNavigationProp<RootStackParamList, 'SignIn'>;
type NavProp = {
  navigation: SignInScreenProps;
};
const SignIn = ({navigation}: NavProp) => {
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
        text="Sign in"
        onPress={() => handleSignInPress({email, password})}
      />
      <Button
        text="Press to sign up"
        onPress={() => {
          navigation.navigate(ROUTES.SIGNUP);
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
