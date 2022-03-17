import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {IComment} from '../../../redux/ducks/comments';
import {getCommentsByPrayerId} from '../../../redux/ducks/comments/selectors';
import CommentItem from './CommentItem';

interface ICommentsProps {
  prayerId: number;
}

const CommentsList = ({prayerId}: ICommentsProps) => {
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

export default CommentsList;
