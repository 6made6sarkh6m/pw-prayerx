import {COLORS} from '../../constants/colors';
import React from 'react';
import styled from 'styled-components/native';

interface ISubscribedPrayerTextProps {
  color: string;
  count: number;
}

const SubscribedPrayerText = ({count, color}: ISubscribedPrayerTextProps) => {
  return (
    <Root>
      <Text color={color}>Subscribed</Text>
      <PrayerCountWrapper>
        <PrayerCounter>{count}</PrayerCounter>
      </PrayerCountWrapper>
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Text = styled.Text<{color: string}>`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.color};
`;

const PrayerCountWrapper = styled.View`
  margin-left: 4px;
  background-color: ${COLORS.dangerRed};
  width: 16px;
  height: 16px;
  border-radius: 50px;
`;

const PrayerCounter = styled.Text`
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: ${COLORS.blindingWhite};
`;

export default SubscribedPrayerText;
