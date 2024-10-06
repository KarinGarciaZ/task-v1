import { gql } from '@apollo/client';

export const GET_COMMENTS_BY_POST = gql`
  query GetCommentsByPost($postId: ID!, $limit: Int, $offset: Int) {
    getCommentsByPost(postId: $postId, limit: $limit, offset: $offset) {
      id
      content
      createdAt
      level
      authorId
      parentId
      commentsCount
      postId
    }
  }
`;

export const GET_COMMENT_REPLIES = gql`
  query GetCommentReplies($parentId: ID!, $limit: Int, $offset: Int) {
    getCommentReplies(parentId: $parentId, limit: $limit, offset: $offset) {
      id
      content
      createdAt
      level
      authorId
      parentId
      commentsCount
      postId
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: String!, $content: String!, $parentId: ID, $authorId: String!, $level: Int!) {
    createComment(postId: $postId, content: $content, parentId: $parentId, authorId: $authorId, level: $level) {
      id
      content
      createdAt
      level
      authorId
      parentId
      commentsCount
      postId
    }
  }
`;
