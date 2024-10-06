import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import env from "dotenv";
import sequelize from "./db-config";
import { schema } from "./schema/schema";
import { commentResolver } from "./resolvers/commentResolver";

env.config();
const app = express();

app.use(cors());

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: commentResolver,
    graphiql: true, // Enable GraphiQL interface in case want to test only the resolvers.
  })
);

export { app, sequelize };
