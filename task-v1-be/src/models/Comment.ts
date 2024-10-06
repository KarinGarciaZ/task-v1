import { DataTypes, Model } from "sequelize";
import sequelize from "../db-config";

// Define the Comment model
export class Comment extends Model {
  public id!: string;
  public postId!: string;
  public content!: string;
  public parentId?: string;
  public authorId!: string;
  public createdAt!: string;
  public level!: number;
  public commentsCount!: number;
}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    commentsCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

export default Comment;
