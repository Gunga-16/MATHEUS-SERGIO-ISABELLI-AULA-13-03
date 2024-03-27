
alert('bem vindo pessoal');

let nome_usuario = '';

let texto = document.querySelector('span')

console.log("NOME DO USUÁRIO = " + nome_usuario);

texto.textContent = nome_usuario;

    while(nome_usuario == '') {
        nome_usuario =  prompt("qual o seu nome?");
    }
