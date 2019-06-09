const express = require('express');
const app = express();
const router = require('./router');
const saturday = require('../src')({
    host: 'localhost',
    port: '3001'
}); // middleware

app.use(express.json()); // json parser

app.use(saturday); // monitoring middleware

app.use(router); // router

app.use((err, req, res, next) => { // error-handler
    res.status(500).json({ err: err });
});
module.exports = app;
