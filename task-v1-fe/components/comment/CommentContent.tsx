import React from 'react';
import User1 from '../../assets/User1.jpeg';

interface CommentContentProps {
  authorId: string;
  createdAt: string;
  content: string;
}

const CommentContent = ({ authorId, createdAt, content }: CommentContentProps) => {
  return (
    <>
      <div className="flex items-center mb-2">
        <img className="object-cover rounded-full w-8 h-8" src={User1.src} alt="User picture" />
        <p className="mx-3 font-semibold">{authorId}</p>
        <span className="text-gray-500 text-sm">• {createdAt}</span>
      </div>
      <p className="text-gray-700 mr-24 border-b border-gray-200 pb-2">{content}</p>
    </>
  );
}

export default CommentContent;
