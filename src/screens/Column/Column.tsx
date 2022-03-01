import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Header} from '../../components/Header';
import GoBackIcon from '../../components/ui/icons/GoBackIcon';
import SettingsIcon from '../../components/ui/icons/SettingsIcon';
import {RootStackParamList} from '../../interfaces/navigator';
import {ROUTES} from '../../navigation/UserNavigation/routes';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {selectColumnById} from '../../redux/ducks/Columns/selectors';
import {Button} from '../../components/ui/Button';
import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/ducks/Auth';
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
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch({type: signOut.type});
  };

  return (
    <Root>
      <Header
        leftPressable={
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon fill={COLORS.skyBlue} />
          </Pressable>
        }
        rightPressable={
          <Pressable
            onPress={() =>
              navigation.navigate(ROUTES.COLUMNSETTINGS, {
                columnId: columnId,
              })
            }>
            <SettingsIcon fill={COLORS.skyBlue} />
          </Pressable>
        }
        title={columnData.title}
      />
      <Button text="Sign out" onPress={handleSignOut} />
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  background-color: ${COLORS.blindingWhite};
`;

export default Column;
