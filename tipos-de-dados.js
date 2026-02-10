//tipos de dados
// No javaScript, existem vários tipos de dados que sao tudo o que armazenamos em variáveis, incluindo:



// 1. String: Representa texto, como "Olá, mundo!" ou "João".
// 2. Number: Representa números, como 42, 3.14 ou -7.
// 3. Boolean: Representa valores verdadeiros ou falsos, como true ou false.
// 4. Null: Representa a ausência de valor, como null.
// 5. Undefined: Representa uma variável que foi declarada, mas não foi atribuída a um valor, como undefined.
// 6. Object: Representa uma coleção de propriedades e métodos, como { nome: "João", idade: 30 }.
// 7. Array: Representa uma lista ordenada de valores, como [1, 2, 3] ou ["maçã", "banana", "laranja"].
// 8. Symbol: Representa um identificador único e imutável, usado principalmente para chaves de objetos.

//string
//sempre usar aspas para criar uma string
let nome = "João";
let mensagem = 'Olá, mundo!';
console.log(nome);
console.log(mensagem);

//o typeof é usado para verificar o tipo de dado
console.log(typeof nome);

let saudacao = "Olá, " + nome + "!";
console.log(saudacao);

// crie uma variavel chamada cidade e armazene o nome de uma cidade.
//depois, exiba no console a mensagem "Eu moro em [cidade]", ~

let cidade = "São Paulo";
console.log("Eu moro em " + cidade);

//template string
console.log(`Eu moro em ${cidade}`);

//number
let idade = 16;
let altura = 1.70;

console.log("Idade:");
console.log("Altura:");
console.log(typeof altura);

let soma = 10 + 5;
console.log( soma);

//crie uma variavel chamada 'anoAtual' e armazene o ano atual. depois, crie outra variavel chamada 'anoNascimento' e armazene seu ano de nascimento. por fim, calcule sua idade e exiba no console a mensagem "Minha idade é [idade] anos".

let anoAtual = 2024;
let anoNascimento = 2007;
let idadeCalculada = anoAtual - anoNascimento;
console.log(`Minha idade é ${idadeCalculada} anos.`);


//boolean
//um booleano é um tipo de dado que pode ser verdadeiro ou falso. ele é usado para representar condições e tomar decisões em um programa.
let maiorDeIdade = true;
let menorDeIdade = false;
console.log("Maior de idade:", maiorDeIdade);
console.log("Menor de idade:", menorDeIdade);
let idade2 = 18;
let podeDirigir = idade2 >= 18;
console.log("Pode dirigir:", podeDirigir);


//##########################################
//-----------------------------------------------------------

// Camel case----- mais famosa

// primeira palavra minuscula
// Palavras seguintes começam com maiuscula
// usada para classes, construtura e componentes
//class UsuarioSistema {
    //constructor(nome, idade) {
        //this.nome = nome;
        //this.idade = idade;
    //}

// Snake case

// palavras seguidas por underscore_
// tudo minusculo
// muito comum no PaymentMethodChangeEvent, banco de dados e api

// Kebab-case

// palavras separadas por hifen-
// !!! nao funciona como nome de variavel em javascript
    // <div class="menu-pricipal"></div>
    
    //objeto agrupa varias informacoes em uma unica variavel usando chave e valor
    let pessoa = {
        nome: "Jota",
        idade: 30,
        cidade: "São Paulo"
    };
    {
    console.log("Nome:", pessoa.nome);
    console.log("Idade:", pessoa.idade);
    console.log("Cidade:", pessoa.cidade);
}

    let carro = null;
    let marcaCarro = "Toyota";
    console.log("Marca do carro:", marcaCarro);
    console.log("Tipo de carro:", typeof carro);
//-----------------------------------------------------------
