var socket = io();
socket.on('connect', function () {
    console.log('connected to server')
    socket.emit('createdMsg', {
        from: 'John',
        text: 'hey'
    })

})
socket.on('disconnect', function () {
    console.log("disconnected from server")
})
socket.on('newMessage', function (info) {
    console.log(info)
})