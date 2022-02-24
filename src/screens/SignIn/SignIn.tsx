import StyledButton from '../../components/ui/StyledButton/StyledButton';
import StyledTextInput from '../../components/ui/StyledTextInput/StyledTextInput';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ISignIn} from '../../redux/ducks/Auth/types';
import {signIn} from '../../redux/ducks/Auth';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {AuthRoutes} from '../../navigation/AuthNavigation/routes';

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
          navigation.navigate(AuthRoutes.SignUp);
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
