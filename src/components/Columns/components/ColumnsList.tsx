import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getColumns, IColumn} from '../../../redux/ducks/columns';
import {selectColumns} from '../../../redux/ducks/columns/selectors';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
import ColumnItem from './ColumnItem';

const ColumnsList = () => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  useEffect(() => {
    dispatch(getColumns());
  }, []);

  return (
    <StyledFlatList
      data={columns}
      renderItem={({item}: {item: IColumn}) => {
        return <ColumnItem data={item} />;
      }}
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

export default ColumnsList;
