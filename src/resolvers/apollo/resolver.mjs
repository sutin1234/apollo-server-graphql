import { books } from "../../data/books.mjs";
import { products } from '../../data/products.mjs'

export const resolvers = {
    Query: {
        books: {
            description: 'query all books',
            resolve: () => books
        },
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
            const { params } = args
            console.log('added book ', params)
            books.push(params)
            return books[books.length - 1];
        },
        updateBook: (root, args, context) => {
            const { params } = args
            let book = books.find(book => book.title == title)
            console.log('founded book ', book)
            if (book) {
                book = { ...book, ...params }
                return book
            }
            return null;
        }
    }
};