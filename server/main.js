const express = require('express');
const bodyParser = require('body-parser');
let app = express();

const { PORT } = require('./config/PortUrlConfig');

const UserController = require('./controller/UserController');
const BookController = require('./controller/BookController');
const InitAdmin = require('./config/InitAdmin');

InitAdmin();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});
app.use('/user', UserController);
app.use('/book', BookController);

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
})