// 1. Array de cores - Mostrando a segunda cor
var cores = ["Vermelho", "Azul", "Verde"];
console.log("Segunda cor: " + cores[1]);

// 2. Array de números - Mostrando o primeiro e o último
var numeros = [10, 20, 30, 40, 50];
console.log("Primeiro: " + numeros[0]);
console.log("Último: " + numeros[4]);

// 3. Array de frutas - Adicionando uma terceira
var frutas = ["Maçã", "Banana"];
frutas.push("Laranja");
console.log("Frutas: " + frutas);

// 4. Array de nomes - Removendo o último
var nomes = ["Ana", "Beto", "Carla", "Daniel"];
nomes.pop();
console.log("Nomes: " + nomes);

// 5. Array de times - Mostrando quantos itens tem
var times = ["Flamengo", "Palmeiras", "Vasco"];
console.log("Quantidade de times: " + times.length);

// 6. Array de animais - Mostrando todos (um por um)
var animais = ["Cachorro", "Gato", "Peixe"];
console.log("Animal 1: " + animais[0]);
console.log("Animal 2: " + animais[1]);
console.log("Animal 3: " + animais[2]);

// 7. Array de carros - Alterando o segundo item
var carros = ["Fusca", "Civic", "Gol"];
carros[1] = "Mustang";
console.log("Carros: " + carros);

// 8. Array de linguagens - Verificando se tem JavaScript
var linguagens = ["HTML", "CSS", "JavaScript"];
console.log("Tem JavaScript? " + linguagens.includes("JavaScript"));

// 9. Array de valores - Soma simples
var valores = [10, 20, 30];
var soma = valores[0] + valores[1] + valores[2];
console.log("Soma total: " + soma);

// 10. Array vazio de tarefas - Adicionando e mostrando
var tarefas = [];
tarefas.push("Lavar louça");
tarefas.push("Estudar");
tarefas.push("Dormir");

console.log("1. " + tarefas[0]);
console.log("2. " + tarefas[1]);
console.log("3. " + tarefas[2]);