var socket = io();
socket.on('connect', function () {
    console.log('connected to server')
    socket.emit('createdEmail', {
        to: 'a.com',
        text: 'hey'
    })
})
socket.on('disconnect', function () {
    console.log("disconnected from server")
})

socket.on('newEmail', function (email) {
    console.log('new email', email);
})