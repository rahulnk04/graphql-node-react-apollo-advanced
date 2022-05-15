import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from "./resolvers/resolvers.js";
import typeDefs from "./schemas/schemaGql.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: 3001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
