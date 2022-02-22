import StyledButton from '../../components/ui/StyledButton/StyledButton';
import StyledTextInput from '../../components/ui/StyledTextInput/StyledTextInput';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUpScreenProps} from 'interfaces/navigator';
import {useDispatch} from 'react-redux';
import {ISignIn} from '../../redux/ducks/Auth/types';
import {signIn} from '../../redux/ducks/Auth';

const SignIn = ({navigation}: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignInPress = (values: ISignIn) => {
    console.log(values);
    dispatch({type: signIn.type, values}); // не вызывается
  };

  return (
    <View style={styles.root}>
      <StyledTextInput value={email} setValue={setEmail} placeholder="Email" />
      <StyledTextInput
        value={password}
        setValue={setPassword}
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
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
});
export default SignIn;
