const express = require('express');

class UserController {
    constructor() {
        this.router = express.Router();
        this.router.get('/', (request, response) => this.getAllUsers(request, response) );
        this.router.get('/:id', (request, response) => this.getUser(request, response) );
    }

    getAllUsers(request, response) {
        const users = request.params; // SELECT * FROM users
        // write for loop to get names from users list
        const username = users.username;

        if ( users == 0 ){
            throw ( "there are no users");
        }
        const mock = { "users": {
            "1" : "Marc Marquez",
            "2" : "Valentino Rossi",
            "3" : "Franco Morbidelli",
            "4" : "Jack Miller"
            }
        };
        response.status(200).send(JSON.stringify(mock) );
    }

    getUser(request, response) {
        const id = request.params.id;
        console.log( "request for user " + id );
        if ( id == 0 ){
            throw ( "bad id");
        }
        const mock = { "id" : id, "name" : "mock", "borrowed books" : "lewis" };
        response.status(200).send(JSON.stringify(mock) );
    }
}

const userRouter = new UserController().router;
module.exports = userRouter;
