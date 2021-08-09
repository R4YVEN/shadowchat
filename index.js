const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 80;

app.use('/js', express.static('js'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  var g_username;

  socket.on('chat_message', ({ username, msg}) => {
    if(username.length < 12 && username.length > 2)
    {
      io.emit('chat_message', username, msg);
    }
    else
    {
      socket.emit('username_error');
    }
  });

  socket.on('announce_me', (username) => {
    io.emit('new_user', username);
    g_username = username;
  });

  socket.on('disconnect', function() {
    io.emit('user_disconnected', g_username);
  });
});

http.listen(port,'0.0.0.0', () => {
  console.log(`ShadowChat running on localhost:${port}`);
});