import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../redux/ducks/auth';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {ColumnsList, Header} from '../../components';
import {Pressable, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {Button} from '../../components/ui';
import {AddIcon} from '../../components/ui/icons';

type BoardScreenProps = StackNavigationProp<RootStackParamList, 'Board'>;
type NavProp = {
  navigation: BoardScreenProps;
};
const Board = ({navigation}: NavProp) => {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch({type: signOut.type});
  };

  return (
    <Root>
      <Header
        title="My Desk"
        rightPressable={
          <Pressable onPress={() => navigation.navigate('AddColumn')}>
            <AddIcon />
          </Pressable>
        }
      />
      <ColumnsList />
      <Button text="Sign out" onPress={handleSignOut} />
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  height: 100%;
  background: ${COLORS.lightGrey};
`;

export default Board;
