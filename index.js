const main = document.querySelector('main');
main.textContent = 'This is a test.';

const socket = new WebSocket('ws://localhost:8081');

function socketOpen(e) {
    socket.send('Hello Server!');
}

function socketMessage(e) {
    console.log('Message from server', e.data);
}

function socketClose(e) {
    console.log('Socket was closed');
}

socket.addEventListener('open', socketOpen);
socket.addEventListener('message', socketMessage);
socket.addEventListener('close', socketClose);

// socket.onopen = socketOpen;
// socket.onmessage = socketMessage;
// socket.onclose = socketClose;
