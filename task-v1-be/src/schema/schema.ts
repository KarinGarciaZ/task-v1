import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Comment {
    id: ID!
    postId: String!
    content: String!
    parentId: ID
    authorId: String!
    createdAt: String
    level: Int!
    commentsCount: Int
  }

  type Query {
    getCommentReplies(parentId: ID!, limit: Int, offset: Int): [Comment]
    getCommentsByPost(postId: ID!, limit: Int, offset: Int): [Comment]
  }

  type Mutation {
    createComment(postId: String!, content: String!, parentId: ID, authorId: String!, level: Int!): Comment
  }
`);
