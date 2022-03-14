import {COLORS} from '../../../constants/colors';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {addPrayer} from '../../../redux/ducks/Prayers';
import {AddIcon} from '../icons';
import {Form, Field} from 'react-final-form';
import {hasEmptyValue} from '../../../helpers/validators';
import {composeValidators} from '../../../utils/composeValidators';
interface IAddPrayerProps {
  columnId: number;
}

interface IAddPrayerValues {
  title: string;
}

const AddPrayerForm = ({columnId}: IAddPrayerProps) => {
  const dispatch = useDispatch();

  const onSubmit = (values: IAddPrayerValues) => {
    const data = {
      columnId: columnId,
      values: {description: '', checked: false, ...values},
    };
    dispatch({type: addPrayer.type, data: data});
  };

  return (
    <Root>
      <Container>
        <StyledAddIcon />
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit, form}) => (
            <FieldWrap>
              <Field
                name="title"
                placeholder="Add a prayer..."
                validate={composeValidators(hasEmptyValue)}
                render={({input, values, placeholder}) => {
                  return (
                    <>
                      <StyledInput
                        placeholder={placeholder}
                        onChange={input.onChange}
                        value={input.value}
                        onSubmitEditing={() => {
                          handleSubmit(values);
                          form.reset();
                        }}
                      />
                    </>
                  );
                }}
              />
            </FieldWrap>
          )}
        />
      </Container>
    </Root>
  );
};

const Root = styled.View`
  padding: 15px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  border: 1px solid ${COLORS.lightGrey};
  border-radius: 10px;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
`;

const FieldWrap = styled.View`
  flex-grow: 1;
`;

const StyledInput = styled.TextInput`
  display: flex;
  flex-grow: 1;
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.concreteGrey};
  width: 100%;
  padding: 15px 0;
  border: none;
`;

const StyledAddIcon = styled(AddIcon).attrs(() => ({
  width: '22',
  height: '22',
}))`
  margin-right: 15px;
`;

export default AddPrayerForm;
