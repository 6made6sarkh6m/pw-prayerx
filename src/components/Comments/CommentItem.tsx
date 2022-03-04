import React, {useState} from 'react';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import styled, {DefaultTheme} from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {IComment} from '../../redux/ducks/Comments/types';
import {deleteComment} from '../../redux/ducks/Comments';
import TrashIcon from '../ui/icons/TrashIcon';
import UserIcon from '../ui/icons/UserIcon';
import {selectUsername} from '../../redux/ducks/Auth/selectors';

interface ICommentItemProps {
  data: IComment;
  style?: DefaultTheme;
}

const CommentItem = (props: ICommentItemProps) => {
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState(props.data);
  const userName = useSelector(selectUsername);
  const created = moment(commentData.created, 'YYYYMMDD').fromNow();

  const handleDeleteComment = () => {
    dispatch({type: deleteComment.type, commentId: commentData.id});
  };

  return (
    <Root>
      <StyledUserIcon width={40} />
      <CommentInfoWrapper>
        <CommentInfoTop>
          <CommentAuthor>{userName}</CommentAuthor>
          <CommentTime>{created}</CommentTime>
        </CommentInfoTop>
        <CommentBody>{commentData.body}</CommentBody>
      </CommentInfoWrapper>
      <CommentDeleteBtn onPress={handleDeleteComment}>
        <TrashIcon width={20} height={20} />
      </CommentDeleteBtn>
    </Root>
  );
};

const Root = styled.View`   
  display: flex;
  flex-direction: rowl
  align-items: flex-start;
  position: relative;
  padding: 15px 17px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${COLORS.lightGrey};
`;

const StyledUserIcon = styled(UserIcon)`
  margin-right: 12px;
`;

const CommentInfoWrapper = styled.View`
  display: flex;
  flex-grow: 1;
`;
const CommentInfoTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;
const CommentAuthor = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
  margin-right: 6px;
`;
const CommentTime = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: ${COLORS.concreteGrey};
`;
const CommentBody = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
`;
const CommentDeleteBtn = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
`;

export default CommentItem;
