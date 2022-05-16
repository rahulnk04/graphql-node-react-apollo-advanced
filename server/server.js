import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from "./resolvers/resolvers.js";
import typeDefs from "./schemas/schemaGql.js";
import dotenv from "dotenv";
import { connectDatabase } from "./config/connectDb.js";

dotenv.config({ path: "./config/config.env" });
connectDatabase();
import "./models/Quotes.js";
import "./models/Users.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: process.env.SERVER_PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} 🚀`);
});
