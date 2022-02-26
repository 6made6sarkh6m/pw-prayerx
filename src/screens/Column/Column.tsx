import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {AppHeader} from '../../components/AppHeader';
import GoBackIcon from '../../components/ui/icons/GoBackIcon';
import SettingsIcon from '../../components/ui/icons/SettingsIcon';
import {RootStackParamList} from '../../interfaces/navigator';
import {AppRoutes} from '../../navigation/UserNavigation/routes';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {selectColumnById} from '../../redux/ducks/Columns/selectors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Prayers} from '../Prayers';
type ColumnScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Column'
>;
type ColumnScreenRouteProps = RouteProp<RootStackParamList, 'Column'>;

type NavProp = {
  navigation: ColumnScreenNavigationProps;
  route: ColumnScreenRouteProps;
};

const Tab = createMaterialTopTabNavigator();
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
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 13, fontWeight: '500'},
          tabBarActiveTintColor: COLORS.skyBlue,
          tabBarInactiveTintColor: COLORS.lightGrey,
          tabBarIndicatorStyle: {backgroundColor: COLORS.skyBlue},
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="Prayers"
          component={Prayers}
          options={{
            tabBarLabel: 'My prayers',
          }}
          initialParams={{columnId: columnId}}
        />
      </Tab.Navigator>
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  background-color: ${COLORS.blindingWhite};
`;

export default Column;
