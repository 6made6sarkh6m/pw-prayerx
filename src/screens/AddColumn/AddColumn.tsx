import React, {useState} from 'react';
import {addColumn, IAddColumn} from '../../redux/ducks/columns';
import {
  selectRequestStatus,
  selectErrormessage,
} from '../../redux/ducks/columns/selectors';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {Pressable, View} from 'react-native';
import {Header} from '../../components';
import {GoBackIcon} from '../../components/ui/icons';
import {Button, Textinput, Loader} from '../../components/ui';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {Form} from 'react-final-form';
import {REQUEST_STATUS} from '../../redux/ducks/types';

type AddColumnScreenProps = StackNavigationProp<
  RootStackParamList,
  'AddColumn'
>;
type NavProp = {
  navigation: AddColumnScreenProps;
};

const AddColumn = ({navigation}: NavProp) => {
  const dispatch = useDispatch();

  const requestStatus = useSelector(selectRequestStatus);
  const errorMessage = useSelector(selectErrormessage);

  const onSubmit = (values: IAddColumn) => {
    dispatch({type: addColumn.type, values});
    if (!errorMessage) {
      navigation.goBack();
    }
  };

  return (
    <Root>
      <Header
        title="Add Column"
        leftPressable={
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon />
          </Pressable>
        }
      />
      <Container>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <View>
              <Textinput name="title" placeholder="Column title" />
              <Textinput name="description" placeholder="Column description" />
              <Button text="Add column" onPress={handleSubmit} />
            </View>
          )}
        />
        <Loader isLoading={requestStatus === REQUEST_STATUS.PENDING} />
        <ErrorText>{errorMessage}</ErrorText>
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

const ErrorText = styled.Text`
  align-self: center;
`;

export default AddColumn;
