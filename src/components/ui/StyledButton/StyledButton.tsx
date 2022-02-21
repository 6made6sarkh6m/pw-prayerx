import React, {FC} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {COLORS} from '../../../styles/colors';

interface StyledButtonProps {
  text: string;
  onPress: () => void;
}
const StyledButton: FC<StyledButtonProps> = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: `${COLORS.warmBeige}`,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontWeight: 'bold',
    color: `${COLORS.blindingWhite}`,
  },
});

export default StyledButton;
