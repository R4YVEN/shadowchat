function AddMessage(msg)
{
    var msgItem = document.createElement('li');
    msgItem.textContent = msg;
    messages.appendChild(msgItem);
    messages.appendChild(document.createElement('hr'));
    window.scrollTo(0, document.body.scrollHeight);
}
