import {
  FETCH_COMMENTS_FAILED,
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REQUEST_COMMENTS,
} from './comment-actions';

const initialState = {
  comments: [],
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return requestComments(state);
    case RECEIVE_COMMENTS:
      return receiveComments(state, action.comments);
    case RECEIVE_COMMENT:
      return receiveComment(state, action.comment);
    case FETCH_COMMENTS_FAILED:
      return fetchCommentsFailed(state, action.error);
    default:
      return state;
  }
}

function requestComments(state) {
  return {...state, isLoading: true};
}

function receiveComments(state, comments) {
  return {...state, isLoading: false, comments: comments};
}

function receiveComment(state, comment) {
  return {...state, comments: state.comments.concat(comment)};
}

function fetchCommentsFailed(state, error) {
  return {...state, error: error, isLoading: false, comments: []};
}
