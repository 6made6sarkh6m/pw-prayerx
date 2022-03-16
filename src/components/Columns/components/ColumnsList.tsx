import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getColumns, IColumn} from '../../../redux/ducks/columns';
import {selectColumns} from '../../../redux/ducks/columns/selectors';
import {FlatList, Text} from 'react-native';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
import ColumnItem from './ColumnItem';
import {Loader} from '../../../components/ui';
import {
  selectRequestStatus,
  selectErrormessage,
} from '../../../redux/ducks/columns/selectors';
const ColumnsList = () => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const requestStatus = useSelector(selectRequestStatus);
  const errorMessage = useSelector(selectErrormessage);
  useEffect(() => {
    dispatch({type: getColumns.type});
  }, []);

  return requestStatus === 'pending' ? (
    <>
      <Loader isLoading />
    </>
  ) : errorMessage ? (
    <Text>{errorMessage}</Text>
  ) : (
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
