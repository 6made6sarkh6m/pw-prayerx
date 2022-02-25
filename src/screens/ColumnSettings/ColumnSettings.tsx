import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {AppHeader} from '../../components/AppHeader';
import GoBackIcon from '../../components/ui/icons/GoBackIcon';
import TrashIcon from '../../components/ui/icons/TrashIcon';
import {deleteColumn} from '../../redux/ducks/Columns';
import {AppRoutes} from '../../navigation/UserNavigation/routes';
import {COLORS} from '../../styles/colors';
import {Pressable} from 'react-native';
import {selectColumnById} from '../../redux/ducks/Columns/selectors';

type ColumnSettingsScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'ColumnSettings'
>;
type ColumnSettignsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ColumnSettings'
>;

type NavProp = {
  navigation: ColumnSettingsScreenNavigationProps;
  route: ColumnSettignsScreenRouteProp;
};

const ColumnSettings = ({navigation, route}: NavProp) => {
  const dispatch = useDispatch();

  const handleDeleteColumn = () => {
    dispatch({type: deleteColumn.type, columnId: route.params.columnId});
    navigation.navigate(AppRoutes.Board);
  };

  return (
    <Root>
      <AppHeader
        leftPressable={
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </Pressable>
        }
        rightPressable={
          <Pressable onPress={() => handleDeleteColumn()}>
            <TrashIcon />
          </Pressable>
        }
        title="Settings"
      />
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  background-color: ${COLORS.blindingWhite};
`;

export default ColumnSettings;
