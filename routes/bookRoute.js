import { getAllBooks, getBook, createBook, updateBook, deleteBook } from "../controllers/bookController.js";

const routes = [
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBook
    },
    {
        method: 'POST',
        path: '/books',
        handler: createBook
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBook
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBook
    },
    {
        method: '*',
        path: '/{any*}',
        handler: () => 'NOT FOUND',
    },
];

export default routes;