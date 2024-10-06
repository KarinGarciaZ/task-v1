import { sequelize, app } from "./app";

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

// Test DB connection and start server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
