import React from 'react';
import {render} from '@testing-library/react';
import CommentCard from '../CommentCard';

describe('Comment Card', () => {
  it('it renders the comment and the author', () => {
    // Arrange
    const props = {
      comment:
        'I’m gonna do today what other people aren’t willing to, so I can do tomorrow, what other people can’t.',
      author: 'Mat Fraser',
    };

    // Act
    const {getByText} = render(<CommentCard {...props} />);

    // Assert
    // getByText will fail if text is not found
    getByText(props.comment);
    getByText(`- ${props.author}`);
  });
});
