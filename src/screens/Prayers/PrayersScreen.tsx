import React from 'react';
import styled from 'styled-components/native';
import {RootStackParamList} from '../../interfaces/navigator';
import {RouteProp} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';
import {Prayers} from '../../components';
type PrayersScreenRouteProps = RouteProp<RootStackParamList, 'Prayers'>;

type NavProps = {
  route: PrayersScreenRouteProps;
};

const PrayersScreen = ({route}: NavProps) => {
  const {columnId} = route.params;

  return (
    <Root>
      <Prayers columnId={columnId} />
    </Root>
  );
};

const Root = styled.View`
  height: 100%;
  display: flex;
  background-color: ${COLORS.blindingWhite};
`;

export default PrayersScreen;
