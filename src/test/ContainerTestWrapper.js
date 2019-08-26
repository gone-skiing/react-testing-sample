import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';

ContainerTestWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

function ContainerTestWrapper(props) {
  const {children, nodeEnv, preloadedState} = props;

  const myStore = configureStore(preloadedState, nodeEnv);

  return <Provider store={myStore}>{React.cloneElement(children)}</Provider>;
}

export default ContainerTestWrapper;
