const express = require('express');
const bodyParser = require('body-parser');
let app = express();

const { PORT } = require('./config/PortUrlConfig');

const UserController = require('./controller/UserController');
const BookController = require('./controller/BookController');
const InitAdmin = require('./config/InitAdmin');

InitAdmin();

app.use(bodyParser.json());
app.use('/user', UserController);
app.use('/book', BookController);

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
})