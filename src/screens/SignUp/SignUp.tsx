import StyledButton from '../../components/ui/StyledButton/StyledButton';
import StyledTextInput from '../../components/ui/StyledTextInput/StyledTextInput';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ISignUp} from '../../redux/ducks/Auth/types';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/ducks/Auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleSignUpPress = (values: ISignUp) => {
    dispatch({type: signUp.type, values});
  };

  return (
    <View style={styles.root}>
      <StyledTextInput
        value={username}
        setValue={setUsername}
        placeholder="Username"
      />
      <StyledTextInput value={email} setValue={setEmail} placeholder="Email" />
      <StyledTextInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <StyledButton
        text="Sign up"
        onPress={() => handleSignUpPress({email, username, password})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
});
export default SignUp;
