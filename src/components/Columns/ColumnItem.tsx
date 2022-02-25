import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../styles/colors';
import {IColumn} from '../../redux/ducks/Columns/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../navigation/UserNavigation/routes';

type ColumnScreenProps = StackNavigationProp<RootStackParamList, 'Column'>;

const ColumnItem = ({data}: {data: IColumn}) => {
  const navigation = useNavigation<ColumnScreenProps>();
  return (
    <Container>
      <StyledPressable
        onPress={() =>
          navigation.navigate(AppRoutes.Column, {columnId: data.id})
        }>
        <StyledText>{data.title}</StyledText>
      </StyledPressable>
    </Container>
  );
};

const Container = styled.View`
  border-width: 1px;
  border-color: ${COLORS.lightGrey};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const StyledPressable = styled.Pressable`
  display: flex;
  padding: 20px 15px;
`;

const StyledText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
  font-weight: 500;
`;

export default ColumnItem;
