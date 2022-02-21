import React, {Dispatch, FC, SetStateAction} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../../../styles/colors';
interface StyledTextInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
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
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${COLORS.blindingWhite}`,
    border: `1px solid ${COLORS.lightGrey}`,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {},
});

export default StyledTextInput;
