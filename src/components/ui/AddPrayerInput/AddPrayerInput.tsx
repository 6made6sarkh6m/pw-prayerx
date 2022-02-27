import {COLORS} from '../../../constants/colors';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {addPrayer} from '../../../redux/ducks/Prayers';
import AddIcon from '../icons/AddIcon';
import {Pressable} from 'react-native';

interface IAddPrayerProps {
  columnId: number;
}

interface IAddPrayerValues {
  title: string;
}

const AddPrayerInput = ({columnId}: IAddPrayerProps) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (values: IAddPrayerValues) => {
    console.log('values:  ', values);
    const data = {
      columnId: columnId,
      values: {description: '', checked: false, ...values},
    };
    console.log('data: ', data);
    dispatch({type: addPrayer.type, data: data});
  };

  const handleChangeTitle = (e: string) => {
    setTitle(e);
  };
  return (
    <InputWrap>
      <InputContainer>
        <Pressable onPress={() => handleSubmit({title})}>
          <StyledAddIcon />
        </Pressable>
        <StyledInput
          value={title}
          onChangeText={e => handleChangeTitle(e)}
          placeholder="Add a prayer..."
        />
      </InputContainer>
    </InputWrap>
  );
};

const InputWrap = styled.View`
  padding: 15px;
`;

const InputContainer = styled.View`
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

export default AddPrayerInput;
