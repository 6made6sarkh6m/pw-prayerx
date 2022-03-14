import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../interfaces/navigator';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {Header} from '../../components';
import {GoBackIcon, TrashIcon} from '../../components/ui/icons';
import {deleteColumn, updateColumn} from '../../redux/ducks/columns';
import {
  selectRequestStatus,
  selectErrormessage,
} from '../../redux/ducks/columns/selectors';
import {ROUTES} from '../../navigation/UserNavigation/routes';
import {COLORS} from '../../constants/colors';
import {Pressable, View} from 'react-native';
import {Textinput, Button, Loader} from '../../components/ui';
import {Form} from 'react-final-form';
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
  const requestStatus = useSelector(selectRequestStatus);
  const errorMessage = useSelector(selectErrormessage);

  const handleDeleteColumn = () => {
    dispatch({type: deleteColumn.type, columnId: route.params.columnId});
    if (!errorMessage) {
      navigation.goBack();
    }

    if (!errorMessage) {
      navigation.navigate(ROUTES.BOARD);
    }
  };

  const onSubmit = (values: IUpdateColumn) => {
    const data = {columnId: route.params.columnId, values};
    dispatch({type: updateColumn.type, data});

    if (!errorMessage) {
      navigation.goBack();
    }
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
            <TrashIcon />
          </Pressable>
        }
        title="Settings"
      />
      <Container>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <View>
              <Textinput
                name="title"
                placeholder="Column title"
                initialValue={route.params.title}
              />
              <Textinput
                name="description"
                placeholder="Column description"
                initialValue={route.params.description}
              />
              <Button text="Update Column" onPress={handleSubmit} />
            </View>
          )}
        />
      </Container>
      <Loader isLoading={requestStatus === 'pending'} />
      <ErrorText>{errorMessage}</ErrorText>
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

const ErrorText = styled.Text`
  align-self: center;
`;

export default ColumnSettings;
