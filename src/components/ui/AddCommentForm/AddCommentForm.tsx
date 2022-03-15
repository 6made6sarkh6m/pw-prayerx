import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {Form, Field} from 'react-final-form';
import {hasEmptyValue} from '../../../helpers/validators';
import {composeValidators} from '../../../utils/composeValidators';
import {addComment} from '../../../redux/ducks/comments';
import {CommentIcon} from '../icons';
import {COLORS} from '../../../constants/colors';
import moment from 'moment';
interface ICommentProps {
  prayerId: number;
}

interface IAddCommentValue {
  body: string;
}

const AddCommentForm = ({prayerId}: ICommentProps) => {
  const dispatch = useDispatch();

  const onSubmit = (values: IAddCommentValue) => {
    const dateCreated = moment().format('YYYY-MM-DD');
    const data = {
      prayerId: prayerId,
      values: {
        body: values.body,
        created: dateCreated,
        prayerId: prayerId,
      },
    };
    dispatch({type: addComment.type, data: data});
  };

  return (
    <Root>
      <CommentIcon />
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, form}) => (
          <FieldWrapper>
            <Field
              name="body"
              placeholder="Add a comment..."
              validate={composeValidators(hasEmptyValue)}
              render={({input, values, placeholder}) => {
                return (
                  <StyledInput
                    placeholder={placeholder}
                    onChange={input.onChange}
                    value={input.value}
                    onSubmitEditing={() => {
                      handleSubmit(values);
                      form.reset();
                    }}
                  />
                );
              }}
            />
          </FieldWrapper>
        )}
      />
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  border: 1px solid ${COLORS.lightGrey};
  border-top-width: 0;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
`;

const StyledInput = styled.TextInput`
  display: flex;
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.concreteGrey};
  width: 100%;
  padding: 15px 0;
`;

const FieldWrapper = styled.View``;

export default AddCommentForm;
