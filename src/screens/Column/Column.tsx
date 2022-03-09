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
import {Pressable, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectColumnById} from '../../redux/ducks/Columns/selectors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PrayersScreen} from '../Prayers';
import {SubscribedPrayersScreen} from '../Prayers';
import {selectPrayersByColumnId} from '../../redux/ducks/Prayers/selectors';
import {SubscribedPrayerText} from '../../components/SubscribedPrayerText';
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

const Tab = createMaterialTopTabNavigator();
const Column = ({navigation, route}: NavProp) => {
  const {columnId} = route.params;
  const columnData = useSelector(selectColumnById(columnId)) || {
    id: 1,
    title: '',
    description: '',
  };
  const prayersData = useSelector(selectPrayersByColumnId(columnId));
  return (
    <Root>
      <Header
        leftPressable={
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </Pressable>
        }
        rightPressable={
          <Pressable
            onPress={() =>
              navigation.navigate(ROUTES.COLUMN_SETTINGS, {
                columnId: columnId,
                title: columnData.title,
                description: columnData.description,
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
          component={PrayersScreen}
          options={{
            tabBarLabel: 'My prayers',
          }}
          initialParams={{columnId: columnId}}
        />
        <Tab.Screen
          name="Subscribed"
          component={SubscribedPrayersScreen}
          options={{
            tabBarLabel: ({color}) => (
              <SubscribedPrayerText color={color} count={prayersData.length} />
            ),
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
