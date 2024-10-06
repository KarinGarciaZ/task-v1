import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Reactions from './Reactions';
import '@testing-library/jest-dom';

describe('Reactions component', () => {
  const mockSetIsReplying = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should toggle like button state', () => {
    render(
      <Reactions 
        isReplying={false}
        setIsReplying={mockSetIsReplying}
        commentsCount={0}
      />
    );

    const likeButton = screen.getByTestId('like-btn');
    expect(likeButton).toBeInTheDocument();
    
    expect(likeButton.querySelector('svg')).toHaveClass('text-gray-500');

    fireEvent.click(likeButton);
    expect(likeButton.querySelector('svg')).toHaveClass('text-red-700');
  });

  it('should toggle the reply button state', () => {
    render(
      <Reactions 
        isReplying={false}
        setIsReplying={mockSetIsReplying}
        commentsCount={0}
      />
    );

    const replyButton = screen.getByText(/Comment/i);
    expect(replyButton).toBeInTheDocument();

    fireEvent.click(replyButton);
    expect(mockSetIsReplying).toHaveBeenCalledWith(true);
  });

  it('should not render comment count button if commentsCount is 0', () => {
    render(
      <Reactions 
        isReplying={false}
        setIsReplying={mockSetIsReplying}
        commentsCount={0}
      />
    );

    const commentCountButton = screen.queryByText('comments');
    expect(commentCountButton).not.toBeInTheDocument();
  });
});
