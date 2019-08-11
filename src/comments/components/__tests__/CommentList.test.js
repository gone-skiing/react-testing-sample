import React from 'react';
import {render} from '@testing-library/react';

import CommentList from '../CommentList';

describe('Comment List', () => {
  it('It renders a list of comment cards with their comment and author', () => {
    // Arrange
    const comment1 = {
      id: 1,
      comment: 'I do love writing tests',
      author: 'Tia-Clair Toomey',
    };
    const comment2 = {
      id: 2,
      comment: 'Nothing is better than a good comment app',
      author: 'Sam Briggs',
    };
    const props = {
      comments: [comment1, comment2],
    };

    // Act
    const {getByText} = render(<CommentList {...props} />);

    // Assert
    getByText(comment1.comment);
    getByText(`- ${comment1.author}`);

    getByText(comment2.comment);
    getByText(`- ${comment2.author}`);
  });
});
