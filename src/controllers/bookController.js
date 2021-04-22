
const express = require('express');

class BookController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllBooks(request, response) );
        this.router.get('/:id', (request, response) => this.getBook(request, response) );
    }

    getAllBooks(request, response) {
        const books = request.params; // SELECT * FROM books
        const title = books.title;
        const author = books.author;
        const id = books.id;
        console.log( "request for all books: " );
        if ( books == 0 ){
            throw ( "there are no books");
        }
        const mock = { "id" : id, "title" : title, "author" : author };
        response.status(200).send(JSON.stringify(mock) );
    }

    getBook(request, response) {
        const id = request.params.id;
        console.log( "request for book " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        const mock = { "id" : id, "title" : "mock", "author" : "lewis" };
        response.status(200).send(JSON.stringify(mock) );
    }
}

const bookRouter = new BookController().router;
module.exports = bookRouter;

