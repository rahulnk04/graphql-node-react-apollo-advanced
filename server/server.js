import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { quotes, users } from "./fakedb.js";

const typeDefs = gql`
  type Query {
    users: [User]
    quotes: [Quote]
    user(id: ID!): User
    iquote(by: ID!): [Quote]
  }
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    quotes: [Quote]
  }
  type Quote {
    name: String
    by: ID
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes,
    user: (_, { id }) => users.find((user) => user.id == id),
    iquote: (_, { by }) => quotes.filter((quote) => quote.by == by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by == ur.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: 3001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
