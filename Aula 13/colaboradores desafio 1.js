const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]
const resp1 = colaboradores.map(colab =>{
    return colab.name;
})
console.log("Resposta 01", resp1);

const resp2 = colaboradores.map(colab =>{
    if (colab.cargo=="front-end"){
      return colab.name;  
    }    
})
console.log("Resposta 02", resp2);

const resp3 = colaboradores.find(colab =>{
    return colab.idade>23
})
console.log("Resposta 03", resp3);

const resp4 = colaboradores.every(colab =>{
    return colab.idade>18
})
console.log("Resposta 04", resp4);

const resp5 = colaboradores.some(colab =>{
    return colab.cargo=="estagiario"
})
console.log("Resposta 05", resp5);