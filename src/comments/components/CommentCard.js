import React from 'react';
import PropTypes from 'prop-types';

CommentCard.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

function CommentCard(props) {
  const {author, comment} = props;

  return (
    <div className="comment-card">
      <p>{comment}</p>
      <p className="author-tag">- {author}</p>
    </div>
  );
}

export default CommentCard;
