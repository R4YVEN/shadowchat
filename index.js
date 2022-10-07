const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 80;

app.use('/js', express.static('js'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var users = [];
var someoneTyping = false;

io.on('connection', (socket) => {
  var g_username;
  var g_chatid;

  socket.on('announce_me', ({username, chatid}) => {
    g_username = username;
    g_chatid = chatid;
    users.push({"id": socket.id, "chatid": chatid});

    for(var user in users)
    {
        if(users[user].chatid == g_chatid)
            io.to(users[user].id).emit('new_user', username, chatid);
    }
  });

  socket.on('typing', (data)=>{
    for(var user in users)
    {
        if(users[user].chatid == g_chatid)
        {
            if(data.typing)
                io.to(users[user].id).emit('typing', data)
            else
                io.to(users[user].id).emit('typing', data)
        }
    }
  })

  socket.on('chat_message', ({ username, msg}) => {
    if(username.length < 12 && username.length > 2)
    {
        for(var user in users)
        {
            if(users[user].chatid == g_chatid)
                io.to(users[user].id).emit('chat_message', username, msg);
        }
    }
    else
    {
      socket.emit('username_error');
    }
  }); 

  socket.on('disconnect', function() {
    io.emit('user_disconnected', g_username);
  });
});


http.listen(port,'0.0.0.0', () => {
  console.log(`ShadowChat running on localhost:${port}`);
});