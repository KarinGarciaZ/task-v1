import React from 'react';
import Button from '../Button';
import User1 from '../../assets/User1.jpeg';

interface ReplyAreaProps {
  handleReplySubmit: (e: React.FormEvent) => Promise<void>;
  authorId: string;
}

const ReplyArea = ({ handleReplySubmit, authorId }: ReplyAreaProps) => {
  return (
    <form onSubmit={handleReplySubmit} className="mt-2">
      <div className="p-3 bg-indigo-50 w-2/3">
        <div className="flex items-center mb-2">
          <img className="object-cover rounded-full w-8 h-8 mr-2" src={User1.src} alt="User picture" />
          <p className="font-semibold text-gray-500">{authorId}</p>
        </div>
        <textarea
          placeholder="What are your thoughts?"
          className="p-2 w-full rounded"
        />
        <Button type="submit" text="Send" />
      </div>
    </form>
  );
}

export default ReplyArea;
