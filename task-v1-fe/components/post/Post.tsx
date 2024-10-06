import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostTabs from './PostTabs';

const Post = () => {
  return (
    <article>
      <PostHeader />
      <PostTabs />
      <PostBody />
    </article>
  );
};

export default Post;
