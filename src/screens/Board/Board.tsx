import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {Columns} from '../../components/Columns';
import {AppHeader} from '../../components/AppHeader';
import {Pressable} from 'react-native';
import AddIcon from '../../components/ui/icons/AddIcon';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';

type BoardScreenProps = StackNavigationProp<RootStackParamList, 'Board'>;
type NavProp = {
  navigation: BoardScreenProps;
};
const Board = ({navigation}: NavProp) => {
  return (
    <Root>
      <AppHeader
        title="My Desk"
        rightPressable={
          <Pressable onPress={() => navigation.navigate('AddColumn')}>
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
