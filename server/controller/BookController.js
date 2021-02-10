const express = require("express");
let app = express.Router();

const ReqValidator = require("./../middleware/book/ReqValidator");
const IdValidator = require("./../middleware/IdValidator");
const AuthenticateRole = require('./../middleware/user/AuthenticateRole');

const CreateBook = require('./../service/book/CreateBook');
const GetAllBook = require('./../service/book/GetAllBook');
const GetBookById = require('./../service/book/GetBookById');
const UpdateBook = require('./../service/book/UpdateBook');
const DeleteBook = require('./../service/book/DeleteBook');
const TokenValidator = require("../middleware/user/TokenValidator");

app.post("/", TokenValidator,  AuthenticateRole(['admin' , 'user']), ReqValidator, CreateBook);
app.get("/", TokenValidator,  AuthenticateRole(['admin' , 'user']), GetAllBook);
app.get("/:id", TokenValidator,  AuthenticateRole(['admin' , 'user']), IdValidator, GetBookById);
app.post("/:id", TokenValidator,  AuthenticateRole(['admin' , 'user']),IdValidator, ReqValidator, UpdateBook);
app.delete("/:id", TokenValidator,  AuthenticateRole(['admin' , 'user']), IdValidator, DeleteBook);

module.exports = app;
