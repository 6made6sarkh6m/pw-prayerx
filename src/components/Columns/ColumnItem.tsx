import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {IColumn} from '../../redux/ducks/Columns/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/UserNavigation/routes';

type ColumnScreenProps = StackNavigationProp<RootStackParamList, 'Column'>;

const ColumnItem = ({data}: {data: IColumn}) => {
  const navigation = useNavigation<ColumnScreenProps>();
  return (
    <Root>
      <StyledPressable
        onPress={() => navigation.navigate(ROUTES.COLUMN, {columnId: data.id})}>
        <Text>{data.title}</Text>
      </StyledPressable>
    </Root>
  );
};

const Root = styled.View`
  border-width: 1px;
  border-color: ${COLORS.lightGrey};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const StyledPressable = styled.Pressable`
  display: flex;
  padding: 20px 15px;
`;

const Text = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
  font-weight: 500;
`;

export default ColumnItem;
