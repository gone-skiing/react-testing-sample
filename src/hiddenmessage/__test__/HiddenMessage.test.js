import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {render, fireEvent} from '@testing-library/react';
import HiddenMessage from '../HiddenMessage';

// NOTE: you do NOT have to do this in every test.
// Learn more about Jest's __mocks__ directory:
// https://jestjs.io/docs/en/manual-mocks
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: jest.fn(({children, in: show}) => (show ? children : null)),
  };
});

/**
 * Note that we are using built-in jest expect here. I could not find
 * equivalent 'toHaveBeenCalled' behavior in chai.
 */
describe('HiddenMessage react testing library', () => {
  it('Render and toggle visibility', () => {
    // Arrange
    const context = expect.any(Object);
    const children = expect.any(Object);
    const defaultProps = {children, timeout: 1000, classNames: 'fade'};

    // Act
    const {getByText, queryByText} = render(
      <HiddenMessage initialShow={true} />,
    );

    // Assert
    const toggleButton = getByText(/toggle/i);
    expect(CSSTransition).toHaveBeenCalledWith(
      {in: true, ...defaultProps},
      context,
    );
    expect(getByText(/hello world/i)).not.toBeNull();

    // Act: toggle visibility
    CSSTransition.mockClear();
    fireEvent.click(toggleButton);

    expect(CSSTransition).toHaveBeenCalledWith(
      {in: false, ...defaultProps},
      context,
    );
    expect(queryByText(/hello world/i)).toBeNull();
  });
});
