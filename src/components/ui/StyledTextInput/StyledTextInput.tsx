import React, {Dispatch, FC, SetStateAction} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
interface StyledTextInputProps {
  value: string;
  setValue: (e: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}
const StyledTextInput: FC<StyledTextInputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Root>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </Root>
  );
};

const Root = styled.View`
  background-color: ${COLORS.blindingWhite};
  border: 1px solid ${COLORS.lightGrey};
  border-radius: 5px;
  padding-horizontal: 10px;
  margin-vertical: 10px;
  width: 100%;
`;

export default StyledTextInput;
