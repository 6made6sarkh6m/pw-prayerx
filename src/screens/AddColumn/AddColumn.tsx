import React, {useState} from 'react';
import {IAddColumn} from '../../redux/ducks/Columns/types';
import {addColumn} from '../../redux/ducks/Columns';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {AppHeader} from '../../components/AppHeader';
import {Pressable} from 'react-native';
import GoBackIcon from '../../components/ui/icons/GoBackIcon';
import {Button, Textinput} from '../../components/ui';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';

type AddColumnScreenProps = StackNavigationProp<
  RootStackParamList,
  'AddColumn'
>;
type NavProp = {
  navigation: AddColumnScreenProps;
};

const AddColumn = ({navigation}: NavProp) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddColumn = (values: IAddColumn) => {
    dispatch({type: addColumn.type, values});
    navigation.goBack();
  };

  return (
    <Root>
      <AppHeader
        title="Add Column"
        leftPressable={
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </Pressable>
        }
      />
      <Container>
        <Textinput value={title} setValue={setTitle} placeholder="Title" />
        <Textinput
          value={description}
          setValue={setDescription}
          placeholder="Description"
        />
        <Button
          text="Add Column"
          onPress={() => handleAddColumn({title, description})}
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
  padding: 15px;
`;

export default AddColumn;
