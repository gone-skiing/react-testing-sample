import React from 'react';
import {expect} from 'chai';
import {fireEvent, render} from '@testing-library/react';

import CommentCreate from '../CommentCreate';
import ContainerTestWrapper from '../../../test/ContainerTestWrapper';

describe('Comment Create', () => {
  it('It renders a disabled button until both fields are filled in', () => {
    // Arrange
    const comment = 'Work gets done when no one is looking';
    const author = 'Mat Fraser';

    const checkComment = submittedComment => {
      expect(submittedComment.comment).to.equal(comment);
      expect(submittedComment.author).to.equal(author);
    };

    // Act
    const {getByLabelText, getByPlaceholderText, getByText} = render(
      <ContainerTestWrapper>
        <CommentCreate onSubmit={checkComment} />
      </ContainerTestWrapper>,
    );

    // Assert
    const submitButton = getByText('Add Comment');
    expect(submitButton.disabled).to.be.true;

    const commentTextfieldNode = getByPlaceholderText('Write something...');
    fireEvent.change(commentTextfieldNode, {target: {value: comment}});

    expect(submitButton.disabled).to.be.true;

    const nameFieldNode = getByLabelText('Your Name');
    fireEvent.change(nameFieldNode, {target: {value: author}});

    expect(submitButton.disabled).to.be.false;

    fireEvent.click(submitButton);
  });
});
