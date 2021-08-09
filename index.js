const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 1337;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat_message', ({ username, msg}) => {
    io.emit('chat_message', username, msg);
  });
});

http.listen(port,'0.0.0.0', () => {
  console.log(`ShadowChat running on localhost:${port}`);
});