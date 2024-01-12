var socket = io();
var chatMessage = document.querySelector('#chat-message');
var chatList = document.querySelector('#chat-list');

chatMessage.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        socket.emit('createMessage', {
            from: 'User',
            text: e.target.value
        }, function () {
            chatMessage.value = '';
        });
    }
});

socket.on('newMessage', function (message) {
    var newMessage = document.createElement('li');
    newMessage.innerText = `${message.from}: ${message.text}`;
    chatList.appendChild(newMessage);
});