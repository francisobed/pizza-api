const express = require('express');
const app = express();
require('dotenv/config');
const morgan = require('morgan');
const mongoose = require('mongoose');
const api = process.env.API_URL;

const validate = require('./src/middlewares/validate');
const register = require('./src/routes/v1/registerController.js.js')


//middleware
app.use(express.json());
app.use(morgan('tiny'));

// routes
app.post(`${api}/register`, validate.createAccountSchema, register.createAccount);
app.get(`${api}/users`, register.getAllUsers);

// DB Connection
mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:'pizza-database'
    })
    .then(() => {console.log('connected to database...')})
    .catch((err) => console.log('error connecting to database', err))

// Server
const port = process.env.URL_PORT || 3310
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})