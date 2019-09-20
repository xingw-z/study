var app = require('http').createServer()

var io = require('socket.io')(app)

var port = 3000

var clientCount = 0

io.listen(port)

io.on('connection', function(socket) {
	clientCount++
	socket.nickName = 'user' + clientCount
	io.emit('enter', socket.nickName + ' comes in')

	socket.on('message', function(str) {
		io.emit('message', socket.nickName + ' : ' + str)
	})

	socket.on('disconnect', function(str) {
		io.emit('leave', socket.nickName + ' left')
	})
})



console.log("websocket listening on port " + port)