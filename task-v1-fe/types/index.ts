export interface Comment {
    id: string;
    postId: string;
    content: string;
    parentId?: string;
    authorId: string;
    createdAt: string;
    level: number;
    commentsCount: number;
}
  