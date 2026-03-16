/*
CONSUMINDO UMA API COM JAVASCRIPT
*/

//================================
// 1- SELECIONAR ELEMENTOS DO HTML
//================================

const jogadorImage = document.getElementById("jogador-image");
const selecaoName = document.getElementById("breedName");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const selecaoInput = document.getElementById("breedInput");
const selecaoArea = document.querySelector(".selecao-area");

//=======================
// 2- URL BASE DA API
//=======================

const API_BASE = "http://10.106.208.10:4000/api/herois";

//===========================
// 3- FUNÇÃO QUE CHAMA A API
//===========================

async function fetchSelecaoImage(endpoint) {
    selecaoArea.classList.add("loading");
    selecaoName.textContent = "Carregando...";
    jogadorImage.src = "";

    try {
        const url = `${API_BASE}${endpoint}`;
        console.log("Requisição:", url);

        const response = await fetch(url);
        const data = await response.json();

        console.log("Resposta:", data);

        if (response.ok && data.status === "sucess") {

            // pega a foto correta da API
            jogadorImage.src = data.foto;

            // mostra o nome que veio da API
            selecaoName.textContent = data.message;

        } else {
            throw new Error("Erro ao buscar herói.");
        }

    } catch (error) {
        console.error("Erro:", error);
        selecaoName.textContent = "Erro ao carregar: " + error.message;
        jogadorImage.src = "";
    } finally {
        selecaoArea.classList.remove("loading");
    }
}

//===========================
// 4- FUNÇÕES PARA BOTÕES
//===========================

function fetchRandomSelecao() {
    fetchSelecaoImage("/aleatorio");
}

function searchSelecaoByName() {
    let nome = selecaoInput.value.toLowerCase().trim();

    // troca espaços por "-"
    nome = nome.replace(/\s+/g, "-");

    if (nome) {
        fetchSelecaoImage(`/${nome}`);
    } else {
        selecaoName.textContent = "Digite o nome de um herói.";
        jogadorImage.src = "";
    }
}

//===========================
// 5- EVENT LISTENERS
//===========================

randomBtn.addEventListener("click", fetchRandomSelecao);
searchBtn.addEventListener("click", searchSelecaoByName);

document.addEventListener("DOMContentLoaded", fetchRandomSelecao);