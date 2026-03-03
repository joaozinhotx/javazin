let homemAranha = document.querySelector('.homemAranha');
let inimigo = document.querySelector('.inimigo');
let nuvem = document.querySelector('.nuvem');
let pontuacaoDisplay = document.getElementById('pontos');
let gameOverOverlay = document.getElementById('gameOverOverlay');
let pontuacaoFinal = document.getElementById('pontuacaoFinal');
let botaoReiniciar = document.getElementById('botaoReiniciar');

console.log('=== ELEMENTOS SELECIONADOS ===');
console.log('Homem-Aranha:', homemAranha);
console.log('Inimigo:', inimigo);
console.log('');


/* ================================================== */
/* VARIÁVEIS GLOBAIS */
/* ================================================== */
let pontos = 0;
let loopDoJogo = null;
let personagemParado = false;


/* ================================================== */
/* FUNÇÃO PULAR - Faz o Homem-Aranha pular */
/* ================================================== */

function pular() {
    if (personagemParado) return;
    
    homemAranha.classList.add('pular');
    
    console.log('🕷️ Homem-Aranha pulando!');
    
    setTimeout(function() {
        homemAranha.classList.remove('pular');
    }, 500);
}


/* ================================================== */
/* CAPTURA DE EVENTOS - Teclado e Mouse */
/* ================================================== */

document.addEventListener('keydown', function() {
    console.log('⌨️ Tecla pressionada!');
    pular();
});

document.addEventListener('click', function() {
    console.log('🖱️ Click do Mouse!');
    pular();
});


/* ================================================== */
/* FUNÇÃO DETECTAR COLISÃO */
/* ================================================== */

function detectarColisao(elemento1, elemento2) {
    let rect1 = elemento1.getBoundingClientRect();
    let rect2 = elemento2.getBoundingClientRect();
    
    let colisao = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
    
    return colisao;
}


/* ================================================== */
/* FUNÇÃO INCREMENTAR PONTOS */
/* ================================================== */

function incrementarPontos() {
    pontos += 10;
    pontuacaoDisplay.textContent = pontos;
    console.log('🎉 Pontos:', pontos);
}


/* ================================================== */
/* FUNÇÃO COLISÃO */
/* ================================================== */

function colisao() {
    console.log('');
    console.log('💥 === COLISÃO DETECTADA! ===');
    console.log('');
    
    personagemParado = true;
    
    homemAranha.style.animation = 'none';
    
    pontuacaoFinal.textContent = pontos;
    
    gameOverOverlay.classList.add('ativo');
    
    console.log('⏸️ Personagem parado!');
}


/* ================================================== */
/* FUNÇÃO REINICIAR JOGO */
/* ================================================== */

function reiniciarJogo() {
    console.log('');
    console.log('🔄 === REINICIANDO JOGO ===');
    console.log('');
    
    personagemParado = false;
    pontos = 0;
    
    gameOverOverlay.classList.remove('ativo');
    
    pontuacaoDisplay.textContent = '0';
    
    inimigo.style.animation = 'mexerInimigo 1.5s infinite linear';
    inimigo.style.left = '';
    
    homemAranha.style.animation = '';
    homemAranha.style.bottom = '0px';
    
    console.log('✅ Jogo reiniciado!');
    console.log('');
    
    iniciarLoop();
}


/* ================================================== */
/* EVENTO DO BOTÃO REINICIAR */
/* ================================================== */

if (botaoReiniciar) {
    botaoReiniciar.addEventListener('click', function() {
        console.log('🔘 Botão Reiniciar clicado!');
        reiniciarJogo();
    });
}


/* ================================================== */
/* FUNÇÃO INICIAR LOOP */
/* ================================================== */

function iniciarLoop() {
    console.log('======= INICIANDO O LOOP DO JOGO =======');
    console.log('');
    
    let inimigoPassed = false;
    let colisaoOcorreu = false;
    
    loopDoJogo = setInterval(function() {
        
        if (!colisaoOcorreu && detectarColisao(homemAranha, inimigo)) {
            colisao();
            colisaoOcorreu = true;
        }
        
        let posicaoInimigo = inimigo.offsetLeft;
        
        if (posicaoInimigo < 0 && !inimigoPassed) {
            incrementarPontos();
            inimigoPassed = true;
        }
        
        if (posicaoInimigo > 120) {
            inimigoPassed = false;
            colisaoOcorreu = false;
        }
        
    }, 10);
}


/* ================================================== */
/* INICIAR O JOGO */
/* ================================================== */

console.log('');
console.log('🎮 === JOGO INICIADO ===');
console.log('Pressione qualquer tecla ou clique para pular!');
console.log('');

iniciarLoop();