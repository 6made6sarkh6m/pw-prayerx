import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../styles/colors';
import {Columns} from '../../components/Columns';
import {AppHeader} from '../../components/AppHeader';
import {Pressable} from 'react-native';
import AddIcon from '../../components/ui/icons/AddIcon';
const Board = () => {
  return (
    <Root>
      <AppHeader
        title="My Desk"
        rightPressable={
          <Pressable>
            <AddIcon width={20} height={20} />
          </Pressable>
        }
      />
      <Columns />
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  height: 100%;
  background: ${COLORS.lightGrey};
`;

export default Board;
