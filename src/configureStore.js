import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {reducer as forms} from 'redux-form';
import thunk from 'redux-thunk';
import commentReducer from './comments/comment-reducers';

const rootReducer = combineReducers({
  comment: commentReducer,
  form: forms, // must be named form, or redux form fields will not work
});

export default function configureStore(
  preloadedState = {},
  nodeEnv = process.env.NODE_ENV,
) {
  const composeEnhancers =
    nodeEnv === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
