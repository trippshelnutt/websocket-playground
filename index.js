const main = document.querySelector('main');
const button = document.querySelector('button');
const message = document.querySelector('input');

function addMessage(message) {
    const text = document.createTextNode(message);

    const para = document.createElement('p');
    para.appendChild(text);

    main.appendChild(para);
}

function buttonClick() {
    socket.send(message.value);
}

function socketOpen(e) {
    socket.send('Hello Server!');
}

function socketMessage(e) {
    addMessage(`Message from server: '${e.data}'`);
}

function socketClose(e) {
    addMessage('Socket was closed');
}

button.onclick = buttonClick;

const socket = new WebSocket('ws://localhost:8081');

socket.addEventListener('open', socketOpen);
socket.addEventListener('message', socketMessage);
socket.addEventListener('close', socketClose);

// socket.onopen = socketOpen;
// socket.onmessage = socketMessage;
// socket.onclose = socketClose;

addMessage('Connection client...');
