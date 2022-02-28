import React, {FC} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
import {Field} from 'react-final-form';
interface StyledTextInputProps {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
}
const Textinput: FC<StyledTextInputProps> = ({
  name,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Root>
      <Field
        name={name}
        placeholder={placeholder}
        render={({input, placeholder}) => {
          return (
            <TextInput
              placeholder={placeholder}
              onChangeText={input.onChange}
              value={input.value}
              secureTextEntry={secureTextEntry}
            />
          );
        }}
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

export default Textinput;
