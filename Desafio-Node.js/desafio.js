// URL DA API DOG CEO (ESPECÍFICA PARA HUSKY)
const urlHusky = 'https://dog.ceo/api/breed/husky/images/random';

// Criando uma função assíncrona para consumir a API usando async/await
async function testarAPI() {
    try {
        // Dentro de uma função async, usamos await para esperar a resolução da Promise do fetch()
        // O fetch() faz a requisição HTTP para o endpoint da API
        const resposta = await fetch(urlHusky);

        // O await aqui espera a conversão da resposta bruta para o formato JSON
        const dados = await resposta.json();

        // Exibindo no terminal conforme o formato solicitado no desafio
        // A propriedade "message" contém a URL da imagem retornada pela API
        console.log(`🐺 Husky: ${dados.message}`);

    } catch (erro) {
        // Caso ocorra algum erro na requisição ou no processamento
        console.error('Erro ao buscar a imagem:', erro.message);
    }
}

// Chamando a função para executar o programa
testarAPI();