import request from 'supertest';
import { app } from '../src/app';  // Adjust path to your Express app
import Comment from '../src/models/Comment'; // Adjust path to the Comment model

const defaultPagination = {
  limit: 10,
  offset: 0,
  order: [["createdAt", "ASC"]]
}

jest.mock('../src/models/Comment', () => ({
  findAll: jest.fn(),
  create: jest.fn(),
}));

describe('GraphQL API Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get comments by postId', async () => {
    // Mock response from Sequelize
    (Comment.findAll as jest.Mock).mockResolvedValue([
      { id: 'comment_001', postId: 'post_123', content: 'Test comment', parentId: null, authorId: 'author_123', createdAt: '2024-10-03T10:00:00Z', level: 1 },
      { id: 'comment_002', postId: 'post_123', content: 'Another test comment', parentId: null, authorId: 'author_124', createdAt: '2024-10-03T10:05:00Z', level: 1 }
    ]);

    const query = `
      query {
        getCommentsByPost(postId: "post_123") {
          id
          content
          createdAt
          level
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query });

    expect(response.status).toBe(200);
    expect(response.body.data.getCommentsByPost).toHaveLength(2);
    expect(response.body.data.getCommentsByPost[0].id).toBe('comment_001');
    expect(Comment.findAll).toHaveBeenCalledWith({ ...defaultPagination, where: { postId: 'post_123', level: 1 } });
  });

  it('should create a new comment', async () => {
    // Mock the create response from Sequelize
    (Comment.create as jest.Mock).mockResolvedValue({
      id: 'comment_001',
      postId: 'post_123',
      content: 'New test comment',
      parentId: null,
      authorId: 'author_123',
      createdAt: '2024-10-03T10:00:00Z',
      level: 1
    });

    const mutation = `
      mutation {
        createComment(postId: "post_123", content: "New test comment", parentId: null, authorId: "author_123", level: 1) {
          id
          content
          postId
          createdAt
        }
      }
    `;

    const response = await request(app)
      .post('/graphql')
      .send({ query: mutation });

    expect(response.status).toBe(200);
    expect(response.body.data.createComment.id).toBe('comment_001');
    expect(Comment.create).toHaveBeenCalledWith({
      postId: 'post_123',
      content: 'New test comment',
      parentId: null,
      authorId: 'author_123',
      level: 1,
    });
  });
});
