import { buildSchema } from 'graphql'
export const schemas = buildSchema(`
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
        addBook(params: BookInput!): Book!
        updateBook(params: BookInput!): Book!
    }

    input BookInput {
        title: String!
        author: String!
    }
`);
