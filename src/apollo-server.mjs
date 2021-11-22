import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas/apollo/schemas.mjs';
import { resolvers } from './resolvers/apollo/resolver.mjs';
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});