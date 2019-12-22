import React from 'react';
import {render} from '@testing-library/react';
import {expect} from 'chai';
import fetchMock from 'fetch-mock';

import ComponentWithActionCreator from '../ComponentWithActionCreator';
import * as allActions from '../redux-action-actions';

import ContainerTestWrapper from '../../../test/ContainerTestWrapper';
import {expectNoConsoleErrors} from '../../../setupTests';
import {SOME_ACTION} from '../redux-action-actions';
import ComponentWithDispatchProp from '../ComponentWithDispatchProp';

afterEach(fetchMock.restore);

describe('Mock redux actions', () => {
  it('It fails to mock with action creator approach', () => {
    jest.spyOn(allActions, 'someAction').mockImplementation(() => {
      return {type: SOME_ACTION, message: 'Mock message'};
    });

    // Act
    const {getByText, queryByText} = render(
      <ContainerTestWrapper>
        <ComponentWithActionCreator />
      </ContainerTestWrapper>,
    );

    // Assert
    expectNoConsoleErrors();

    // This should really be a mock message, but we find real one
    getByText('Real message');
    expect(queryByText('Mock message')).to.be.null;
  });

  it('It mocks with traditional dispatch prop approach', () => {
    jest.spyOn(allActions, 'someAction').mockImplementation(() => {
      return {type: SOME_ACTION, message: 'Mock message'};
    });

    // Act
    const {getByText, queryByText} = render(
      <ContainerTestWrapper>
        <ComponentWithDispatchProp />
      </ContainerTestWrapper>,
    );

    // Assert
    expectNoConsoleErrors();

    // This should really be a mock message, but we find real one
    getByText('Mock message');
    expect(queryByText('Real message')).to.be.null;
  });
});
