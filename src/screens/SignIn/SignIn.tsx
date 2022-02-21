import StyledButton from '../../components/ui/StyledButton/StyledButton';
import StyledTextInput from '../../components/ui/StyledTextInput/StyledTextInput';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUpScreenProps} from 'interfaces.tsx/navigator';
const SignIn = ({navigation}: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInPress = () => {};

  return (
    <View style={styles.root}>
      <StyledTextInput value={email} setValue={setEmail} placeholder="Email" />
      <StyledTextInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <StyledButton text="Sign in" onPress={handleSignInPress} />
      <StyledButton
        text="Don't have an account?"
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
