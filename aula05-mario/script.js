//variaveis
let mario = document.querySelector('.mario');
let cano = document.querySelector('.cano');
let nuvem= document.querySelector('.nuvem');
let telaFim = document.querySelector('.fim');
let botaoReiniciar = document.querySelector('.reinicar');

console.log('=== PARADA 01');
console.log('Mario',mario);
console.log('Cano',cano);
console.log('Nuvem',nuvem);
console.log('Tela de Fim',telafim);
console.log('Botao',botaoReiniciar);


function pular (){
    mario.classList.add('pular')
    //setimeout = espera um tempo e depois executa algo
    setTimeout(function(){
        //desta forma o mario volta ao normal dps do pulo
        mario.classList.remove('pular')
    },500);
}

document.addEventListener9('keydown', function(){
    //mostra que pode ver on console quando a tecla é pressionada
    console.log('tecla pressionada!chamando função pular()')

    pular();
})
document.addEventListener('click', function(){
    console.log('Click do Mouse! chamado função pular()')
    pular();
});

console.log('======= INICIANDO O LOOP DO JOGO ======');
console.log('Agora o jogo vai começar a verificar colisão....');

let loopDoJogo = setInterval(function(){
    //offsetLeft: distancia do elemento
    let posicaoCano = cano.offsetLeft;


    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log('cano:', posicaoCano,'Mario:', posicaoMario);
})
