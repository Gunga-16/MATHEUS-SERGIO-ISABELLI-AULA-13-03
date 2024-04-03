const botoes = document.querySelectorAll('.objetivos');
// botoes.lenght





for(let i = 0; i < botoes.length; i++) {
console.log(i); 
    botoes[i].onclick = function(){
        botoes[i].classList.add('ativo');
    }

//botoes[i].classList.remove('ativo');
}
