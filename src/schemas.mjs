import { gql } from 'apollo-server';
export const typeDefs = gql`
    type Book {
        title: String!
        author: String!
    }
    type Product {
        id: String!
        name: String!
        description: String!
        qty: Int!
        price: Float!
    }
    type Query {
        book(id: String!): Book
        books: [Book]!
        products: [Product]!
        product(id: String!): Product
    }
    type Mutation {
        addBook(title: String!, author: String!): Book!
        updateBook(title: String!, author: String!): Book!
    }
`;
