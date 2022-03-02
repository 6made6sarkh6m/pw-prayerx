import React, {FC} from 'react';
import {COLORS} from '../../../constants/colors';
import styled from 'styled-components/native';
interface StyledButtonProps {
  text: string;
  onPress: () => void;
}
const Button: FC<StyledButtonProps> = ({text, onPress}) => {
  return (
    <StyledPressable onPress={onPress}>
      <Text>{text}</Text>
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable`
  width: 100%;
  padding: 10px;
  background-color: ${COLORS.warmBeige};
  border-radius: 5px;
  align-items: center;
  margin-vertical: 5px;
`;

const Text = styled.Text`
font-weight: bold,
color: ${COLORS.blindingWhite};
`;

export default Button;
