const botoes = document.querySelectorAll('.objetivos');
const texto = document.querySelectorAll('.aba-conteudo');
// botoes.lenght

for(let i = 0; i < botoes.length; i++) {
console.log(i); 
    botoes[i].onclick = function(){
        for(let j = 0; j< botoes.length; j++){
            botoes[j].classList.remove('ativo');
            texto[j].classList.remove('ativa');
        }
        botoes[i].classList.add('ativo');
        texto[i].classList.add('ativa');
      
    }

//botoes[i].classList.remove('ativo');
}

const contadores = document.querySelectorAll('.contador');

const tempoObjetivo1 = new Date ('2024-11-12T00:00:00');
const tempoObjetivo2 = new Date ('2025-01-17T00:00:00');


let tempoAtual = new Date ();
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);




contadores[0].textContent = dias + "Dias" + horas + "Horas"  + minutos + "Minutos"  + segundos + "Segundos";


