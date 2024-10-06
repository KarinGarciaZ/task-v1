import { GraphQLError } from "graphql";
import Comment from "../models/Comment";

export const commentResolver = {
  // Get comments of an specific comment. Only next level. Added pagination.
  getCommentReplies: async (
    { parentId, limit = 10, offset = 0 }:
    { parentId: string; limit?: number; offset?: number }
  ) => {
    return await Comment.findAll({
      where: { parentId },
      limit,
      offset,
      order: [['createdAt', 'ASC']],
    });
  },
  // Get comments of an specific post. Only first level. Added pagination.
  getCommentsByPost: async (
    { postId, limit = 10, offset = 0 }:
    { postId: string; limit?: number; offset?: number }
  ) => {
    return await Comment.findAll({
      where: { postId, level: 1 },
      limit,
      offset,
      order: [['createdAt', 'ASC']],
    });
  },
  // Create a new comment. Added validation to be up to 4th level deep.
  createComment: async (
    { postId, content, parentId, authorId, level }:
    { postId: string; content: string; parentId?: string; authorId: string; level: number, commentsCount: number }
  ) => {
    if (level >= 5 || (!parentId && level !== 1)) {
      throw new GraphQLError("Bad Request: Incorrect comment level", {
        extensions: {
          code: 'BAD_USER_INPUT',
          http: { status: 400 }
        }
      });
    }
    const newComment = await Comment.create({
      postId,
      content,
      parentId,
      authorId,
      level
    });

    if (parentId) {
      await Comment.increment(
        { commentsCount: 1 },  // Increment commentsCount by 1
        { where: { id: parentId } }  // Find the parent comment by its id
      );
    }
    return newComment;
  },
};
