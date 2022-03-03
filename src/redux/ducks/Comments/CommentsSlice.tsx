import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IComment, IAddComment} from './types';
import {REQUEST_STATUS} from '../types';
interface InitialState {
  data: IComment[];
  requestStatus: string;
}

const initialState: InitialState = {
  data: [],
  requestStatus: REQUEST_STATUS.IDLE,
};

const CommentsSlice = createSlice({
  initialState: initialState,
  name: 'comments',
  reducers: {
    getComments(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },

    getCommentsSuccess(state, {payload}: PayloadAction<IComment[]>) {
      state.data = payload;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
    },

    getCommentsFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
    },

    addComment(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },

    addCommentSuccess(state, {payload}: PayloadAction<IComment>) {
      state.data.push(payload);
      state.requestStatus = REQUEST_STATUS.SUCCEED;
    },

    addCommentFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
    },

    deleteComment(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },

    deleteCommentSuccess(state, {payload}: PayloadAction<number>) {
      const newState = state.data.filter(comment => comment.id !== payload);
      state.data = newState;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
    },

    deleteCommentFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
    },
  },
});

export const {
  getComments,
  getCommentsFailed,
  getCommentsSuccess,
  addComment,
  addCommentFailed,
  addCommentSuccess,
  deleteComment,
  deleteCommentFailed,
  deleteCommentSuccess,
} = CommentsSlice.actions;

export default CommentsSlice.reducer;
