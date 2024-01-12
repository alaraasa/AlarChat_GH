const socket = io();
const messagesList = document.getElementById('messages');
const formElement = document.getElementById('form');
const inputElement = document.getElementById('input');

// Message event
socket.on('message', (message) => {
    const liElement = document.createElement('li');
    liElement.textContent = message;
    messagesList.appendChild(liElement);
});

// Message send logic
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    socket.emit('message', inputElement.value);
    inputElement.value = '';
});