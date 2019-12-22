import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {someAction} from './redux-action-actions';

class ComponentWithDispatchProp extends Component {
  componentDidMount() {
    this.props.dispatch(someAction());
  }

  render() {
    const {message} = this.props;
    return <div>{message}</div>;
  }
}

function mapStateToProps(state) {
  const {reduxAction} = state;
  return {
    message: reduxAction.message,
  };
}

ComponentWithDispatchProp.propTypes = {
  dispatch: PropTypes.func,
  message: PropTypes.string,
};

export default connect(mapStateToProps)(ComponentWithDispatchProp);
