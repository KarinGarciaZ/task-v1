'use client';
import React, { useState } from 'react';
import { Comment as CommentType } from '@/types';
import client from '@/lib/apolloClient';
import { CREATE_COMMENT, GET_COMMENT_REPLIES } from '@/graphql/queries';
import Reactions from './Reactions';
import ReplyArea from './ReplyArea';
import CommentContent from './CommentContent';
import { COMMENTS_LIMIT } from '@/lib/constants';

const Comment: React.FC<CommentType> = (
  { id = null, content, authorId, createdAt, commentsCount, level, postId }
) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replies, setReplies] = useState<CommentType[]>([]);
  const [offset, setOffset] = useState(0);

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, errors } = await client.mutate({
      mutation: CREATE_COMMENT,
      variables: {
        parentId: id,
        authorId,
        postId,
        level: level + 1,
        content: e.target[0].value
      },
    });
    setIsReplying(false);
    if (data) {
      setReplies([...replies, data.createComment])
    }
  };

  const getReplies = async () => {
    const { loading, error, data } = await client.query({
      query: GET_COMMENT_REPLIES,
      variables: { parentId: id, limit: COMMENTS_LIMIT, offset },
    });
    if (data) {
      setReplies([...replies, ...data.getCommentReplies]);
      setOffset(offset + COMMENTS_LIMIT);
    }
  };

  return (
    <div className="m-4 mb-10">
      <div className="border-l-2 pl-4">
        <CommentContent authorId={authorId} createdAt={createdAt} content={content} />
        <Reactions
          setIsReplying={setIsReplying}
          isReplying={isReplying}
          getReplies={getReplies}
          commentsCount={commentsCount}
        />
      </div>

      {isReplying && <ReplyArea handleReplySubmit={handleReplySubmit} authorId={authorId} />}

      {/* Render Replies */}
      {replies.length > 0 && (
        <div className="ml-6 mt-8">
          {(replies as CommentType[]).map((reply) => (
            <Comment key={reply.id} {...reply} />
          ))}
        </div>
      )}
      {(commentsCount > offset && replies.length) ?
        <button className="text-indigo-600" onClick={getReplies}>Show more comments</button>:
        null  
      }
    </div>
  );
};

export default Comment;
