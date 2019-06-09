const app = require('./app');
const server = require('http').createServer(app);

server.listen(3001, (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log('Server is running');
})