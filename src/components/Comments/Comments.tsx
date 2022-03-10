import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {IComment} from '../../redux/ducks/Comments/types';
import {getCommentsByPrayerId} from '../../redux/ducks/Comments/selectors';
import {getComments} from '../../redux/ducks/Comments';
import CommentItem from './CommentItem';

interface ICommentsProps {
  prayerId: number;
}

const Comments = ({prayerId}: ICommentsProps) => {
  const comments = useSelector(getCommentsByPrayerId(prayerId));
  return (
    <StyledCommentsList
      data={comments}
      renderItem={({item}: {item: IComment}) => <CommentItem data={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const StyledCommentsList = styled.FlatList`
  border-top-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
` as unknown as typeof FlatList;

export default Comments;
