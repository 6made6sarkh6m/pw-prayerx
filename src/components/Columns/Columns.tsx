import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getColumns} from '../../redux/ducks/Columns';
import {selectColumns} from '../../redux/ducks/Columns/selectors';
import {IColumn} from '../../redux/ducks/Columns/types';
import {FlatList, Text, View} from 'react-native';

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

  useEffect(() => {
    console.log('render columns');
    dispatch({type: getColumns.type});
  }, [dispatch]);
  console.log('Columns component: ' + columns);
  const renderColumns = ({item}: {item: IColumn}) => {
    return <Item data={item} />;
  };
  return (
    <FlatList
      style={{backgroundColor: 'black'}}
      data={columns}
      renderItem={renderColumns}
      keyExtractor={column => column.id.toString()}
    />
  );
};

export default Columns;
