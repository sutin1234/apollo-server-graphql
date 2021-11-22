
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './resolvers/express/resolver.mjs';
import { schemas } from './schemas/express/schemas.mjs'


var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schemas,
    rootValue: resolvers,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));