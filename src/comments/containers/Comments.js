import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addComment, fetchComments} from '../comment-actions';
import CommentList from '../components/CommentList';
import CommentCreate from '../components/CommentCreate';
import '../comments.css';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  componentDidMount() {
    // If we destructure here, we get no-shadowing warning which is
    // meant to prevent us from invoking disconnected fetchComments
    // action creator with the same name
    // https://stackoverflow.com/questions/37682705/avoid-no-shadow-eslint-error-with-mapdispatchtoprops
    this.props.fetchComments();
  }

  handleAddComment(comment) {
    return this.props.addComment(comment);
  }

  render() {
    const {comments, error} = this.props;

    return (
      <div className="comments-container">
        <CommentCreate onSubmit={this.handleAddComment} />
        <CommentList comments={comments} error={error} />
      </div>
    );
  }
}

Comments.propTypes = {
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  fetchComments: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {comment} = state;

  return {
    comments: comment.comments,
    error: comment.error,
  };
}

const actionCreators = {
  addComment,
  fetchComments,
};

export default connect(
  mapStateToProps,
  actionCreators,
)(Comments);
