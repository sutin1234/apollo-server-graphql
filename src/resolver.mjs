import { books } from "./data/books.mjs";
import { products } from './data/products.mjs'

export const resolvers = {
    Query: {
        books: () => books,
        book: (arent, args, context) => {
            const { id } = args;
            const founded = books.find(item => item.id == id)
            return founded || null;
        },
        products: () => products,
        product: (parent, args, context) => {
            const { id } = args;
            const founded = products.find(item => item.id == id)
            return founded || null;
        }
    },
};