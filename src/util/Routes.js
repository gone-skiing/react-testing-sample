import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

export class Home extends Component {
  render() {
    return <div>Home Page</div>;
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
        <BrowserRouter>
          <div>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={News} exact path="/news" />
              <Route component={News} exact path="/news/tech" />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
