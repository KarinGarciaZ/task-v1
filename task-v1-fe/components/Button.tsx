import React from 'react';

interface CommentProps {
    text: string;
    type: 'submit' | 'button';
  }

const Button: React.FC<CommentProps> = ({ type, text }) => {
  return (
    <button type={type} className="mt-2 bg-indigo-500 text-white px-3 py-1 rounded">
        {text}
    </button>
  );
};

export default Button;
