import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas/apollo/schemas.mjs';
import { resolvers } from './resolvers/apollo/resolver.mjs';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginLandingPageGraphQLPlayground()] });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});