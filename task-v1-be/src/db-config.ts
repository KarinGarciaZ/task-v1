import { Sequelize } from "sequelize";
import env from 'dotenv';
env.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_PASS = process.env.DB_PASS;

// Initialize Sequelize with PostgreSQL
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  dialect: 'postgres',
});

export default sequelize;
