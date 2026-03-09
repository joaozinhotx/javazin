async function explorar() {
    const racas= await fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    const total = Object.keys(racas.message).length
    console.log(`Total de raças: ${total}`);

    for (const raca in racas.message) {
        if (racas.message[raca].length > 0) {

            console.log(`Raça: ${raca}, Sub-raças: ${racas.message[raca].join(', ')}`);

    

    }
    
}}explorar()    