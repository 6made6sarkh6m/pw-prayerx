import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
interface AppHeaderProps {
  title: string;
  leftPressable?: ReactElement;
  rightPressable?: ReactElement;
}

const AppHeader = ({title, rightPressable, leftPressable}: AppHeaderProps) => {
  return (
    <Header>
      {leftPressable ? leftPressable : null}
      <Title>{title}</Title>
      {rightPressable ? rightPressable : null}
    </Header>
  );
};

const Header = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.blindingWhite};
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.lightGrey};
  border-style: solid;
  padding: 22px 10px;
`;

const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
  text-align: center;
  font-weight: 500;
  margin: 0 auto;
`;

export default AppHeader;
