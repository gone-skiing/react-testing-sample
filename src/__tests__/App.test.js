import React from 'react';
import {expect} from 'chai';
import {render} from '@testing-library/react';

import App from '../App';
import ContainerTestWrapper from '../test/ContainerTestWrapper';
import {expectNoConsoleErrors} from '../setupTests';

describe('App', () => {
  it('It renders without crashing', () => {
    const {queryByText} = render(
      <ContainerTestWrapper>
        <App />
      </ContainerTestWrapper>,
    );

    expectNoConsoleErrors();
    expect(queryByText('Comments')).to.not.be.null;
  });

  it('It renders without crashing with production mode', () => {
    // Act
    const {queryByText} = render(
      <ContainerTestWrapper nodeEnv="production">
        <App />
      </ContainerTestWrapper>,
    );

    // Assert
    expectNoConsoleErrors();
    expect(queryByText('Comments')).to.not.be.null;
  });
});
