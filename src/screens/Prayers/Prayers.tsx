import React from 'react';
import styled from 'styled-components/native';
import {RootStackParamList} from '../../interfaces/navigator';
import {RouteProp} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';

type PrayersScreenRouteProps = RouteProp<RootStackParamList, 'Prayers'>;

type NavProps = {
  route: PrayersScreenRouteProps;
};

const Prayers = ({route}: NavProps) => {
  const {columnId} = route.params;

  return(
      <Root></Root>
  )
};

const Root = styled.View`
  height: 100%;
  display: flex;
  background-color: ${COLORS.blindingWhite};
`;


export default Prayers;