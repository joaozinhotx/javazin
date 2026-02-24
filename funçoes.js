// 1- Crie uma função que receba um número e retorne o dobro.
function dobro(numero) {
    return numero * 2;
}
console.log(dobro(5));

// 2- Crie uma função que receba um número e retorne o triplo.
function triplo(numero) {
    return numero * 3;
}
console.log(triplo(5));

// 3- Crie uma função que receba dois números e retorne a soma.
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 20));

// 4- Crie uma função que receba dois números e retorne a multiplicação.
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(4, 5));

// 5- Crie uma função que receba um valor em real e converta para dólar.
function converterParaDolar(real) {
    return real / 5.0;
}
console.log(converterParaDolar(50));


// 6- Crie uma função que receba um valor em dólar e converta para real.
function converterParaReal(dolar) {
    return dolar * 5.0;
}
console.log(converterParaReal(10));

// 7- Crie uma função que receba um salário e calcule aumento de 10%.
function calcularAumento10(salario) {
    return salario + (salario * 0.10);
}
console.log(calcularAumento10(2000));

// 8- Crie uma função que retorne se o número é par.
function ehPar(numero) {
    return numero % 2 === 0;
}
console.log(ehPar(4));

// 9- Crie uma função que imprima números de 1 até 10.
function imprimir1Ate10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
imprimir1Ate10();

// 10- Crie uma função que receba um limite e imprima até ele.
function imprimirAteLimite(limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
}
imprimirAteLimite(5);

// 11- Crie uma função que some todos os números até 10.
function somarAte10() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + i;
    }
    return soma;
}
console.log(somarAte10());

// 12- Crie uma função que conte quantos pares existem até 10.
function contarParesAte10() {
    let contador = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            contador = contador + 1;
        }
    }
    return contador;
    }

    // 13- Crie uma função que exiba a tabuada de um número.
function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
exibirTabuada(7);

// 14- Crie uma função que faça contagem regressiva.
function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
        console.log(i);
    }
}
contagemRegressiva(5);

// 15- Crie uma função que encontre o número 27.
function encontrar27(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === 27) {
            return "Número 27 encontrado na posição " + i;
        }
    }
    return "Número 27 não encontrado";
}
console.log(encontrar27([10, 20, 27, 40]));

// 16- Crie uma função que some números pares até um limite.
function somarParesAteLimite(limite) {
    let soma = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma = soma + i;
        }
    }
    return soma;
}
console.log(somarParesAteLimite(10));

// 17- Crie uma função que conte números ímpares.
function contarImpares(lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            contador = contador + 1;
        }
    }
    return contador;
}
console.log(contarImpares([1, 2, 3, 4, 5]));

// 18- Crie uma função que retorne a média de dois números.
function calcularMedia(a, b) {
    return (a + b) / 2;
}
console.log(calcularMedia(8, 10));

// 19- Crie uma função que retorne o quadrado de um número.
function calcularQuadrado(numero) {
    return numero * numero;
}
console.log(calcularQuadrado(6));