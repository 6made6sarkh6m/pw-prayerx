import {put, takeLatest} from 'redux-saga/effects';
import {http} from '../../../services/httpClient';
import {
  getComments,
  getCommentsFailed,
  getCommentsSuccess,
  addComment,
  addCommentFailed,
  addCommentSuccess,
  deleteComment,
  deleteCommentFailed,
  deleteCommentSuccess,
} from '.';

import {IComment, IAddComment} from './types';

export interface IAddCommentRequestProps {
  type: typeof addComment.type;
  data: IAddComment;
}

export interface IDeleCommentRequestProps {
  type: typeof deleteComment.type;
  commentId: number;
}

export function* loadComments() {
  try {
    const request: {data: IComment[]} = yield http.get('/comments/');
    yield put(getCommentsSuccess(request.data));
  } catch (e) {
    yield put(getCommentsFailed());
  }
}

export function* createComment({data}: IAddCommentRequestProps) {
  try {
    const request: {data: IComment} = yield http.post(
      `/prayers/${data.prayerId}/comments`,
      data.values,
    );
    yield put(addCommentSuccess(request.data));
  } catch (e) {
    yield put(addCommentFailed());
  }
}

export function* removeComment({commentId}: IDeleCommentRequestProps) {
  try {
    const request: {data: IComment} = yield http.delete(
      `/comments/${commentId}`,
    );
    yield put(deleteCommentSuccess(commentId));
  } catch (e) {
    yield put(deleteCommentFailed());
  }
}

export function* observeLoadComments() {
  yield takeLatest(getComments.type, loadComments);
}

export function* observeCreateComment() {
  yield takeLatest(addComment.type, createComment);
}

export function* observeRemoveComment() {
  yield takeLatest(deleteComment.type, removeComment);
}
