import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IComment, IAddComment} from './types';
import {REQUEST_STATUS} from '../types';
interface InitialState {
  data: IComment[];
  requestStatus: string;
  errorMessage: string;
}

const initialState: InitialState = {
  data: [],
  requestStatus: REQUEST_STATUS.IDLE,
  errorMessage: '',
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
      state.errorMessage = ``;
    },

    getCommentsFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't load data. Something went wrong.`;
    },

    addComment(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },

    addCommentSuccess(state, {payload}: PayloadAction<IComment>) {
      state.data.push(payload);
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = ``;
    },

    addCommentFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't add a comment. Something went wrong.`;
    },

    deleteComment(state) {
      state.requestStatus = REQUEST_STATUS.PENDING;
    },

    deleteCommentSuccess(state, {payload}: PayloadAction<number>) {
      const newState = state.data.filter(comment => comment.id !== payload);
      state.data = newState;
      state.requestStatus = REQUEST_STATUS.SUCCEED;
      state.errorMessage = ``;
    },

    deleteCommentFailed(state) {
      state.requestStatus = REQUEST_STATUS.FAILED;
      state.errorMessage = `Couldn't delete a comment. Something went wrong`;
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
