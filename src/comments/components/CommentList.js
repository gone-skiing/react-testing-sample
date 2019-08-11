import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
};

function CommentList(props) {
  const {comments, error} = props;
  return error ? (
    <div>{error}</div>
  ) : (
    <div>
      {comments.map(comment => (
        <CommentCard
          author={comment.author}
          comment={comment.comment}
          key={comment.id}
        />
      ))}
    </div>
  );
}

export default CommentList;
