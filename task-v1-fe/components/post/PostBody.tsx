'use client';
import React, { useEffect, useState } from 'react';
import Comment from '../comment/Comment';
import { Comment as CommentType } from '@/types';
import { CREATE_COMMENT, GET_COMMENTS_BY_POST } from '@/graphql/queries';
import client from '@/lib/apolloClient';
import CommentContent from '../comment/CommentContent';
import Reactions from '../comment/Reactions';
import ReplyArea from '../comment/ReplyArea';
import { COMMENTS_LIMIT } from '@/lib/constants';

const dummy_content = `
  The cell is the basic unit of life, and within each cell lies a structure of incredible 
  importance: the nucleus. Often referred to as the "command center" of the cell, 
  the nucleus plays a critical role in maintaining genetic information and regulating 
  cellular functions. Let’s explore the anatomy and functions of the cell nucleus to 
  understand why it’s so vital for life.
  The nucleus is truly the command center of the cell, orchestrating everything from 
  protein synthesis to cell division. Without this vital organelle, life as we know it 
  wouldn’t exist. As we continue to study the intricacies of the nucleus, we uncover 
  more about how cells function, how they communicate, and how errors in nuclear 
  processes can lead to disease.
`

const Comments: React.FC = () => {
  const [isReplying, setIsReplying] = useState(false);
  const [replies, setReplies] = useState<CommentType[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const { loading, error, data } = await client.query({
      query: GET_COMMENTS_BY_POST,
      variables: { postId: 'post_123' },
      fetchPolicy: 'cache-first'
    });
    if (data) {
      setReplies([...data.getCommentsByPost]);
      setOffset(offset + COMMENTS_LIMIT);
    }
  }

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, errors } = await client.mutate({
      mutation: CREATE_COMMENT,
      variables: {
        parentId: null,
        authorId: 'user_01',
        postId: 'post_123',
        level: 1,
        content: e.target[0].value
      },
    });
    setIsReplying(false);
    if (data) {
      setReplies([...replies, data.createComment])
    }
  };

  return (
    <div className="mt-8 ml-4">
      <div className="text-lg">
        <CommentContent authorId="oscar_garcia" createdAt="6 days ago" content={dummy_content} />
      </div>
      <Reactions
        setIsReplying={setIsReplying}
        isReplying={isReplying}
        commentsCount={replies.length}
      />
      {isReplying && <ReplyArea handleReplySubmit={handleReplySubmit} authorId="user_01" />}
      <div className="space-y-4">
        {replies.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
      {(replies.length === offset && replies.length) ?
        <button className="mt-4 text-indigo-600" onClick={getComments}>Show more comments</button>:
        null  
      }
    </div>
  );
};

export default Comments;
