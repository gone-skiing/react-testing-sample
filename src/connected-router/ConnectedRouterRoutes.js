import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../configureStore';

export class Home extends Component {
  render() {
    return (
      <div>
        <div>Home Page</div>
        <div>
          <Link to="/">Home</Link> <Link to="/connected-router/news">News</Link>
          <Link to="/connected-router/news/tech">Tech News</Link>
        </div>
      </div>
    );
  }
}

export const News = props => {
  const {location} = props;
  return <div>News Feed {location.pathname}</div>;
};

News.propTypes = {
  location: PropTypes.object.isRequired,
};

export class NoMatch extends Component {
  render() {
    return <div>404 page</div>;
  }
}

class Routes extends Component {
  render() {
    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={News} exact path="/connected-router/news" />
              <Route
                component={News}
                exact
                path="/connected-router/news/tech"
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ConnectedRouter>
      </div>
    );
  }
}

export default Routes;
