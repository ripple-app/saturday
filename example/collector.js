const server = require('http').createServer();
const io = require('socket.io')(server);
const messages = {};

io.on('connection', (socket) => {
    messages[socket.id] = '';

    socket.on('data', (message) => {
        messages[socket.id] += message;

        if (messages[socket.id].slice(-1)[0] === '!') {
            console.log(message);
            messages[socket.id] = '';
        }
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} is disconnected`);
        delete messages[socket.id];
    });
});

server.listen(3001, (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log('Server is running');
});
