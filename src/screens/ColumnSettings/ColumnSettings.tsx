import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {Header} from '../../components/Header';
import GoBackIcon from '../../components/ui/icons/GoBackIcon';
import TrashIcon from '../../components/ui/icons/TrashIcon';
import {deleteColumn} from '../../redux/ducks/Columns';
import {ROUTES} from '../../navigation/UserNavigation/routes';
import {COLORS} from '../../constants/colors';
import {Pressable} from 'react-native';
import {Textinput} from '../../components/ui/Textinput';
import {Button} from '../../components/ui/Button';
import {updateColumn} from '../../redux/ducks/Columns';
interface IUpdateColumn {
  title: string;
  description: string;
}

type ColumnSettingsScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'ColumnSettings'
>;
type ColumnSettignsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ColumnSettings'
>;

type NavProp = {
  navigation: ColumnSettingsScreenNavigationProps;
  route: ColumnSettignsScreenRouteProp;
};

const ColumnSettings = ({navigation, route}: NavProp) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSetTitle = (value: string) => {
    setTitle(value);
  };

  const handleSetDescription = (value: string) => {
    setDescription(value);
  };

  const handleDeleteColumn = () => {
    dispatch({type: deleteColumn.type, columnId: route.params.columnId});
    navigation.navigate(ROUTES.BOARD);
  };

  const handleUpdateColumn = (values: IUpdateColumn) => {
    const data = {columnId: route.params.columnId, values};
    dispatch({type: updateColumn.type, data});
    navigation.goBack();
  };

  return (
    <Root>
      <Header
        leftPressable={
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </Pressable>
        }
        rightPressable={
          <Pressable onPress={() => handleDeleteColumn()}>
            <TrashIcon fill={COLORS.dangerRed} />
          </Pressable>
        }
        title="Settings"
      />
      <Container>
        <Textinput
          value={title}
          setValue={e => handleSetTitle(e)}
          placeholder="Column Title"
        />
        <Textinput
          value={description}
          setValue={e => handleSetDescription(e)}
          placeholder="Column description"
        />
        <Button
          text="Update column"
          onPress={() => handleUpdateColumn({title, description})}
        />
      </Container>
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  background-color: ${COLORS.blindingWhite};
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.blindingWhite};
  padding: 15px;
`;

export default ColumnSettings;
