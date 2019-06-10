saturday
=============
'saturday' is middleware that roles as a small agent for Express.

## How to use
``` 
npm install saturday

const express = require('express');
const app = express();
const saturday = require('saturday')({ // collector server ip and port
    host: 'localhost',
    port: '3001'
}); // middleware

app.use(express.json()); // json parser

app.use(saturday); // monitoring middleware

app.get('/', (req, res) => {
    const result = {
        say: 'hi'
    };
    res.json(result);
});

app.get('/send', (req, res) => {
    const result = {
        say: 'hi'
    };
    res.send(result);
});

app.get('/err', (req, res) => {
    throw new Error('call error');
});

app.use((err, req, res, next) => { // error-handler
    res.status(500).json({ err: err });
});
module.exports = app;

```