import sequelize from "../src/db-config";
import Comment from "../src/models/Comment";
import { commentsMock } from "./comments.mock";

const seedDatabase = async () => {
  const t = await sequelize.transaction();
  try {
      // Insert seed data into the table
      await Comment.bulkCreate(commentsMock, { transaction: t });
      await t.commit();

      console.log('Seed data inserted successfully!');
  } catch (error) {
      await t.rollback();
      console.error('Error seeding database:', error);
  }
}

// Call the function to seed the database
seedDatabase();
