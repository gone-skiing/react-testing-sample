import React from 'react';
//import Enzyme, {mount} from 'enzyme';
import Routes from '../Routes';
import {MemoryRouter} from 'react-router';
//import Adapter from 'enzyme-adapter-react-16';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

//Enzyme.configure({adapter: new Adapter()});

// Make sure that browser router does not interfere with in memory router
// or initial values will not work
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>;
module.exports = rrd;

/**
 * https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
 */
describe('routes using memory router', () => {
  it('should show Home component for / router (using memory router)', () => {
    const {getByText} = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>,
    );

    getByText('Home Page');
  });

  it('should show No match component for route not defined', () => {
    const {debug, getByText} = render(
      <MemoryRouter initialEntries={['/unknown']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    debug();

    getByText('404 page');
  });

  it('should show News component for route', () => {
    const {getByText} = render(
      <MemoryRouter initialEntries={['/news']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );

    getByText('News Feed /news');
  });
});
