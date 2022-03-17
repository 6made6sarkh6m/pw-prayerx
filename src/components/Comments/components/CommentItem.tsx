import React, {useState} from 'react';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import styled, {DefaultTheme} from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
import {deleteComment, IComment} from '../../../redux/ducks/comments';
import {UserIcon, TrashIcon} from '../../ui/icons';
import {selectUsername} from '../../../redux/ducks/auth/selectors';

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
      <Wrapper>
        <Top>
          <Author>{userName}</Author>
          <CommentTime>{created}</CommentTime>
        </Top>
        <Body>{commentData.body}</Body>
      </Wrapper>
      <DeleteBtn onPress={handleDeleteComment}>
        <TrashIcon width={20} height={20} />
      </DeleteBtn>
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  flex-direction: row;
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

const Wrapper = styled.View`
  display: flex;
  flex-grow: 1;
`;
const Top = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;
const Author = styled.Text`
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
const Body = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
`;
const DeleteBtn = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
`;

export default CommentItem;
