function AddMessage(msg)
{
    var msgItem = document.createElement('li');
    msgItem.textContent = msg;
    messages.appendChild(msgItem);
    messages.appendChild(document.createElement('hr'));
    window.scrollTo(0, document.body.scrollHeight);
}


var typing = false;
var timeout = undefined;
var user;
var typingSent = false;

function TypingTimeout(){
    typing = false;
    typingSent = false;
    socket.emit('typing', {user:user, typing:false});
}

function SetTyping(e)       //Thanks Rohan1311 for the timeout "system"
{
    if(e.which!=13){
        typing = true;

        if(typingSent == false)
            socket.emit('typing', {user:'someone', typing:true});

        typingSent = true;
        clearTimeout(timeout);
        timeout = setTimeout(TypingTimeout, 2000);
      }else{
        clearTimeout(timeout);
        TypingTimeout();
    }
}
