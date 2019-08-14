import React from 'react';
import {fireEvent, render, wait} from '@testing-library/react';

import Comments from '../Comments';
import fetchMock from 'fetch-mock';
import ContainerTestWrapper from '../../../test/ContainerTestWrapper';
import {expectNoConsoleErrors} from '../../../setupTests';

const comments = {
  1: {
    id: 1,
    comment: 'I do love writing tests',
    author: 'Tia-Clair Toomey',
  },
  2: {
    id: 2,
    comment: 'Nothing is better than a good comment app',
    author: 'Sam Briggs',
  },
};

describe('Comments tests', () => {
  beforeEach(() => {
    fetchMock.get('*', Promise.resolve(comments));
    fetchMock.post('*', 200);
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('It fetches comments and renders them to the page', async () => {
    // Arrange

    // Act
    const {getByText} = render(
      <ContainerTestWrapper>
        <Comments />
      </ContainerTestWrapper>,
    );

    // Assert

    await wait(() => getByText(comments[1].comment));
    getByText(`- ${comments[1].author}`);

    getByText(comments[2].comment);
    getByText(`- ${comments[2].author}`);

    expectNoConsoleErrors();
  });

  it('It creates a new comment and renders it', async () => {
    // Arrange
    const newComment = {
      id: 3,
      comment: 'Brave new world of testing',
      author: 'Noah Olsen',
    };

    // Act

    const {getByLabelText, getByPlaceholderText, getByText} = render(
      <ContainerTestWrapper>
        <Comments />
      </ContainerTestWrapper>,
    );

    // Assert

    // Wait for async rendering to complete
    await wait(() => getByText(comments[1].comment));

    // Add new comment
    const submitButton = getByText('Add Comment');
    const commentTextfieldNode = getByPlaceholderText('Write something...');
    const nameFieldNode = getByLabelText('Your Name:');

    fireEvent.change(commentTextfieldNode, {
      target: {value: newComment.comment},
    });
    fireEvent.change(nameFieldNode, {target: {value: newComment.author}});
    fireEvent.click(submitButton);

    // Wait for operation to complete and assert that new comment shows up and
    // the form clears
    await wait(() => getByText(`- ${newComment.author}`));

    expect(commentTextfieldNode.value).toEqual('');
    expect(nameFieldNode.value).toEqual('');

    expectNoConsoleErrors();
  });
});
