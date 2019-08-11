import 'isomorphic-fetch';

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED';

export function fetchComments() {
  return dispatch => {
    dispatch(requestComments());

    return fetch(`https://react-my-burger-25854.firebaseio.com/comments.json`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        const fetchedComments = [];

        if (json) {
          Object.keys(json).forEach(key => {
            fetchedComments.push({
              ...json[key],
              id: key,
            });
          });
        }
        dispatch(receiveComments(fetchedComments));
      })
      .catch(error => {
        dispatch(fetchCommentsFailed(error));
      });
  };
}

export function requestComments() {
  return {
    type: REQUEST_COMMENTS,
  };
}

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
}

export function fetchCommentsFailed(error) {
  return {
    type: FETCH_COMMENTS_FAILED,
    error,
  };
}

export function addComment(comment) {
  return dispatch => {
    comment.id = generateQuickGuid();

    return fetch(`https://react-my-burger-25854.firebaseio.com/comments.json`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(comment),
    })
      .then(() => {
        dispatch(receiveComment(comment));
      })
      .catch(error => {
        dispatch(fetchCommentsFailed(error));
      });
  };
}

export function receiveComment(comment) {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
}

function generateQuickGuid() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}
