import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const getComments = (state: RootState) => state.comments;

export const getCommentsByPrayedId = (prayerId: number) =>
  createSelector(getComments, state =>
    state.data.filter(comment => comment.id === prayerId),
  );
