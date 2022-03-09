import React from 'react';
import {RouteProp} from '@react-navigation/native';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {Prayers} from '../../components/Prayers';
import {RootStackParamList} from '../../interfaces/navigator';

type SubscribedPrayersRouteProp = RouteProp<
  RootStackParamList,
  'SubscribedPrayers'
>;

type NavProps = {
  route: SubscribedPrayersRouteProp;
};

const SubscribedPrayersScreen = ({route}: NavProps) => {
  const {columnId} = route.params;

  return (
    <Root>
      <Prayers columnId={columnId} withoutInput={true} />
    </Root>
  );
};

const Root = styled.View`
  height: 100%;
  display: flex;
  background-color: ${COLORS.blindingWhite};
`;

export default SubscribedPrayersScreen;
