import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInScreenProps = StackScreenProps<RootStackParamList, 'SignIn'>;
export type SignUpScreenProps = StackScreenProps<RootStackParamList, 'SignUp'>;
