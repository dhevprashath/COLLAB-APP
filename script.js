const socket = io();

const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    const content = editor.value;
    socket.emit('documentChange', content);
});

socket.on('documentChange', (data) => {
    editor.value = data;
});