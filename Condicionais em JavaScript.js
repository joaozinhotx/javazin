// 1- Verifique se um número é positivo ou negativo
let numero = 10;

if (numero >= 0) {
    console.log("O número é positivo");
} else {
    console.log("O número é negativo");
}

// 2- Maior de idade
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 3- Número par ou ímpar
let numParImpar = 7;

if (numParImpar % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

// 4- Situação do aluno
let nota = 7;

if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 5- Pode votar?
let idadeVoto = 16;

if (idadeVoto >= 16) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}

// 6- Senha correta
let senha = "1234";

if (senha == "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// 7- Temperatura do dia
let temperatura = 25;

if (temperatura >= 25) {
    console.log("Está quente");
} else {
    console.log("Está frio");
}

// 8- Altura para brinquedo
let altura = 1.60;

if (altura >= 1.50) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

// 9- Número positivo, negativo ou zero
let valor = 0;

if (valor > 0) {
    console.log("Positivo");
} else if (valor < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 10- Classificação de nota
let notaFinal = 8;

if (notaFinal >= 9) {
    console.log("Excelente");
} else if (notaFinal >= 7) {
    console.log("Bom");
} else if (notaFinal == 6) {
    console.log("Regular");
} else {
    console.log("Reprovado");
}

// 11- Pode dirigir?
let idadeMotorista = 20;
let temCNH = true;

if (idadeMotorista >= 18 && temCNH == true) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// 12- Desconto na compra
let valorCompra = 150;

if (valorCompra > 100) {
    console.log("Ganhou desconto");
} else {
    console.log("Sem desconto");
}

// 13- Login do sistema
let user = "admin";
let pass = "123";

if (user == "admin" && pass == "123") {
    console.log("Login realizado");
} else {
    console.log("Erro de login");
}

// 14- Classificação de filme
let idadeCine = 17;

if (idadeCine >= 16) {
    console.log("Pode assistir");
} else {
    console.log("Não pode assistir");
}

// 15- Semáforo
let cor = "verde";

if (cor == "verde") {
    console.log("Pode passar");
} else if (cor == "amarelo") {
    console.log("Atenção");
} else if (cor == "vermelho") {
    console.log("Pare");
}