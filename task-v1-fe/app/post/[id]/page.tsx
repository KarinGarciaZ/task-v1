import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import Post from '../../../components/post/Post';

const PostPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Post />
      </div>
    </div>
  );
};

export default PostPage;
