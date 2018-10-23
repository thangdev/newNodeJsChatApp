const express = require('express');
const http = require('http')
const socketIO = require('socket.io')
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected ')

    socket.emit('newEmail', {
        from: 'a@gmail.com',
        text: 'hello'

    })
    socket.on('createdEmail', (data) => {
        console.log('created email : ', data)
    })
    socket.on('disconnect', () => {
        console.log('user was disconnected !!')
    })


})
server.listen(port, function () {
    console.log(`Server is running on port ${port}`)
});