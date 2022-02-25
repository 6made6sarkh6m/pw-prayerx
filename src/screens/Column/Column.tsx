import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {AppHeader} from '../../components/AppHeader';
import GoBackIcon from '../../components/ui/icons/GoBackIcon';
import SettingsIcon from '../../components/ui/icons/SettingsIcon';
import {RootStackParamList} from '../../interfaces/navigator';
import {AppRoutes} from '../../navigation/UserNavigation/routes';
import styled from 'styled-components/native';
import {COLORS} from '../../styles/colors';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {selectColumnById} from '../../redux/ducks/Columns/selectors';
type ColumnScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Column'
>;
type ColumnScreenRouteProps = RouteProp<RootStackParamList, 'Column'>;

type NavProp = {
  navigation: ColumnScreenNavigationProps;
  route: ColumnScreenRouteProps;
};

const Column = ({navigation, route}: NavProp) => {
  const {columnId} = route.params;
  const columnData = useSelector(selectColumnById(columnId));
  return (
    <Root>
      <AppHeader
        leftPressable={
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </Pressable>
        }
        rightPressable={
          <Pressable
            onPress={() =>
              navigation.navigate(AppRoutes.ColumnSettings, {
                columnId: columnId,
              })
            }>
            <SettingsIcon />
          </Pressable>
        }
        title={columnData.title}
      />
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  background-color: ${COLORS.blindingWhite};
`;

export default Column;
