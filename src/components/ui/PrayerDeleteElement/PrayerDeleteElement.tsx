import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
const PrayerDeleteElement = () => {
  return (
    <Root>
      <DeleteElement>
        <DeleteElementText>Delete</DeleteElementText>
      </DeleteElement>
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 20px;
  background-color: ${COLORS.dangerRed};
  height: 68px;
`;

const DeleteElement = styled.View`
  position: absolute;
  top: 0;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  background-color: ${COLORS.dangerRed};
  right: 0;
`;

const DeleteElementText = styled.Text`
  color: ${COLORS.blindingWhite};
  font-size: 13px;
  line-height: 15px;
`;

export default PrayerDeleteElement;
