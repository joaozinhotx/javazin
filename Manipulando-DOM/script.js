
document.addEventListener("keydown", function(e){
        if  (e.key === "r" ){
            document.body.style.background = "red"
            console.log(e.key)



        }else if (e.key == "g"){
            document.body.style.background = "green"
            console.log(e.key)


        }else{
            document.body.style.background = "blue"
            console.log(e.key)


        }
})


document.addEventListener("keydown", function(e){

    let texto= e.key.toLowerCase();
        if  (texto === "r" ){
            document.body.style.background = "red"
            console.log(e.key)



        }else if (texto == "g"){
            document.body.style.background = "green"
            console.log(e.key)


        }else{
            document.body.style.background = "blue"
            console.log(e.key)


        }
})

document.addEventListener("keydown", function(e){

     let texto= e.key.toLowerCase();
    let cor= document.getElementById("cor")

        if  (texto === "r" ){
            document.body.style.background = "red"
            cor.innerHTML = "Vermelho"


        }else if (texto == "g"){
            document.body.style.background = "green"
            cor.innerHTML = "Verde"


        }else{
            document.body.style.background = "blue"
            cor.innerHTML = "Azul"


        }
})

document.addEventListener("keydown", function(e){


     let texto= e.key.toLowerCase();
    let cor= document.getElementById("cor")


        if  (texto === "r" ){
            document.body.style.background = "red"
            cor.innerHTML = "Vermelho"



        }else if (texto == "g"){
            document.body.style.background = "green"
            cor.innerHTML = "Verde"



        }else{
            document.body.style.background = "blue"
            cor.innerHTML = "Azul"



        }
})


// Requisito 5: Adicionar Y - amarelo e P - roxo
document.addEventListener("keydown", function(e){

    let texto= e.key.toLowerCase();
    let cor= document.getElementById("cor")

        if  (texto === "r" ){
            document.body.style.background = "red"
            cor.innerHTML = "Vermelho"

        }else if (texto == "g"){
            document.body.style.background = "green"
            cor.innerHTML = "Verde"

        }else if (texto === "b"){
            document.body.style.background = "blue"
            cor.innerHTML = "Azul"

        }else if (texto === "y"){
            document.body.style.background = "yellow"
            cor.innerHTML = "Amarelo"

        }else if (texto === "p"){
            document.body.style.background = "purple"
            cor.innerHTML = "Roxo"

        }
})


// Requisito 6: Pressione x para remover a cor aplicada
document.addEventListener("keydown", function(e){

    let texto= e.key.toLowerCase();
    let cor= document.getElementById("cor")

        if  (texto === "r" ){
            document.body.style.background = "red"
            cor.innerHTML = "Vermelho"

        }else if (texto == "g"){
            document.body.style.background = "green"
            cor.innerHTML = "Verde"

        }else if (texto === "b"){
            document.body.style.background = "blue"
            cor.innerHTML = "Azul"

        }else if (texto === "y"){
            document.body.style.background = "yellow"
            cor.innerHTML = "Amarelo"

        }else if (texto === "p"){
            document.body.style.background = "purple"
            cor.innerHTML = "Roxo"

        }else if (texto === "x"){
            document.body.style.background = "white"
            cor.innerHTML = "Cor removida"

        }
})


// Requisito 7: Refatore o código usando um objeto que guarda teclas e cores
let cores = {
    'r': { nome: 'Vermelho', cor: 'red' },
    'g': { nome: 'Verde', cor: 'green' },
    'b': { nome: 'Azul', cor: 'blue' },
    'y': { nome: 'Amarelo', cor: 'yellow' },
    'p': { nome: 'Roxo', cor: 'purple' }
}

document.addEventListener("keydown", function(e){

    let texto= e.key.toLowerCase();
    let cor= document.getElementById("cor")

    if(cores[texto]){
        document.body.style.background = cores[texto].cor
        cor.innerHTML = cores[texto].nome

    }else if (texto === "x"){
        document.body.style.background = "white"
        cor.innerHTML = "Cor removida"

    }
})


// Requisito 8: Mostre no console o valor RGB da cor aplicada
const coresRGB = {
    'r': { nome: 'Vermelho', cor: 'red', rgb: 'rgb(255, 0, 0)' },
    'g': { nome: 'Verde', cor: 'green', rgb: 'rgb(0, 128, 0)' },
    'b': { nome: 'Azul', cor: 'blue', rgb: 'rgb(0, 0, 255)' },
    'y': { nome: 'Amarelo', cor: 'yellow', rgb: 'rgb(255, 255, 0)' },
    'p': { nome: 'Roxo', cor: 'purple', rgb: 'rgb(128, 0, 128)' }
}

document.addEventListener("keydown", function(e){

    let texto= e.key.toLowerCase();
    let cor= document.getElementById("cor")

    if(coresRGB[texto]){
        document.body.style.background = coresRGB[texto].cor
        cor.innerHTML = coresRGB[texto].nome
        console.log(coresRGB[texto].rgb)

    }else if (texto === "x"){
        document.body.style.background = "white"
        cor.innerHTML = "Cor removida"
        console.log("rgb(255, 255, 255)")

    }
})



let colorSequence = ['r', 'g', 'b', 'y', 'p']
let currentColorIndex = -1

let coresCiclo = {
    'r': { nome: 'Vermelho', cor: 'red', rgb: 'rgb(255, 0, 0)' },
    'g': { nome: 'Verde', cor: 'green', rgb: 'rgb(0, 128, 0)' },
    'b': { nome: 'Azul', cor: 'blue', rgb: 'rgb(0, 0, 255)' },
    'y': { nome: 'Amarelo', cor: 'yellow', rgb: 'rgb(255, 255, 0)' },
    'p': { nome: 'Roxo', cor: 'purple', rgb: 'rgb(128, 0, 128)' }
}

document.addEventListener("keydown", function(e){

    let texto= e.key.toLowerCase();
    let cor= document.getElementById("cor")

    if(texto === " "){
        currentColorIndex = (currentColorIndex + 1) % colorSequence.length
         let proximaTecla = colorSequence[currentColorIndex]
        let colorData = coresCiclo[proximaTecla]

        

        document.body.style.background = colorData.cor
        cor.innerHTML = colorData.nome
        console.log(colorData.rgb)

    }
})



document.addEventListener("keydown", function(e){

    let texto= e.key.toLowerCase();

    if(texto === "n"){
        document.body.style.background = "#1a1a1a"
        document.body.style.color = "white"
        document.querySelector("h2").innerHTML = "Modo Escuro"
        console.log("Modo Escuro Ativado")

    }else if(texto === "d"){
        document.body.style.background = "white"
        document.body.style.color = "black"
        document.querySelector("h2").innerHTML = "Modo Claro"
        console.log("Modo Claro Ativado")

    }
})

