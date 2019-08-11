import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';

ContainerTestWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

function ContainerTestWrapper(props) {
  const {children, preloadedState} = props;

  const myStore = configureStore(preloadedState);

  return <Provider store={myStore}>{React.cloneElement(children)}</Provider>;
}

export default ContainerTestWrapper;
