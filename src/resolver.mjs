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
    Mutation: {
        addBook: (root, args, context) => {
            const { title, author } = args
            books.push({ title, author })
            return { title, author }
        },
        updateBook: (root, args, context) => {
            const { title, author } = args
            let book = books.find(book => book.title == title)
            book = { ...book, title, author }
            return book
        }
    }
};