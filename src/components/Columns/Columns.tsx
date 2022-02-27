import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getColumns} from '../../redux/ducks/Columns';
import {selectColumns} from '../../redux/ducks/Columns/selectors';
import {IColumn} from '../../redux/ducks/Columns/types';
import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';

const Item = ({data}: {data: IColumn}) => {
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  );
};

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  const renderColumns = ({item}: {item: IColumn}) => {
    return <Item data={item} />;
  };

  useEffect(() => {
    dispatch({type: getColumns.type});
  }, []);

  return (
    <StyledFlatList
      data={columns}
      renderItem={renderColumns}
      keyExtractor={column => column.id.toString()}
    />
  );
};

const StyledFlatList = styled.FlatList`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${COLORS.blindingWhite};
` as unknown as typeof FlatList;
export default Columns;
