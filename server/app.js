// require/import packages
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

// set app and invoke express
const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mongoDB database
mongoose.connect('mongodb+srv://stoneyR:test123@graphql-learning-eifau.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

// use GraphiQL to create schema
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// listen to port and fire callback /* run app with 'node app' or 'nodemon app' */
app.listen(4000, () => {
    console.log('now listening for request on port 4000');
});