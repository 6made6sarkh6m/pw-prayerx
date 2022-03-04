import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const getComments = (state: RootState) => state.comments;

export const getCommentsByPrayerId = (prayerId: number) =>
  createSelector(getComments, state =>
    state.data.filter(comment => comment.id === prayerId),
  );
