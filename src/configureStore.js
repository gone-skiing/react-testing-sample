import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {reducer as forms} from 'redux-form';
import thunk from 'redux-thunk';
import commentReducer from './comments/comment-reducers';
import reduxActionReducer from './mocks/redux-action/redux-action-reducers';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {logger} from 'redux-logger';

const createRootReducer = history =>
  combineReducers({
    comment: commentReducer,
    reduxAction: reduxActionReducer,
    router: connectRouter(history),
    form: forms, // must be named form, or redux form fields will not work
  });

export const history = createBrowserHistory();

export default function configureStore(
  preloadedState = {},
  nodeEnv = process.env.NODE_ENV,
) {
  const composeEnhancers =
    nodeEnv === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  return createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, logger)),
  );
}
