import { Usuario } from "./usuario.js";
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const message = document.getElementById('message');
const usuario = new Usuario('admin', '1234');
loginButton.addEventListener('click', () => {
    const nome = usernameInput.value;
    const senha = passwordInput.value;
    if (usuario.validar(nome, senha)) {
        message.textContent = 'Login bem-sucedido';
        message.style.color = 'green';
    } else {
    message.textContent = 'nome de usuário ou senha incorretos.';
        message.style.color = 'red';
    }
});