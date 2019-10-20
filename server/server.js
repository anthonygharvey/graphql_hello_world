const { ApolloServer, gql } = require('apollo-server');

// define the GraphQL schema
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL World!'
  }
};

const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server
  .listen({ port: 9000 })
  // .then(serverInfo => console.log(`Server running at ${serverInfo.url}`));
  .then(({ url }) => console.log(`Server running at ${url}`));
