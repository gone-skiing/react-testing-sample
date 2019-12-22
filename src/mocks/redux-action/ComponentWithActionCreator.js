import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {someAction} from './redux-action-actions';

class ComponentWithActionCreator extends Component {
  componentDidMount() {
    this.props.someAction();
  }

  render() {
    const {message} = this.props;
    return <div>{message}</div>;
  }
}

const actionCreators = {
  someAction,
};

function mapStateToProps(state) {
  const {reduxAction} = state;
  return {
    message: reduxAction.message,
  };
}

ComponentWithActionCreator.propTypes = {
  message: PropTypes.string,
  someAction: PropTypes.func,
};

export default connect(
  mapStateToProps,
  actionCreators,
)(ComponentWithActionCreator);
