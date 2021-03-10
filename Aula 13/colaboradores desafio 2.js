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

const resp1a = colaboradores.reduce((acc, colab) =>{
    return acc + colab.idade;
}, 0);
console.log("Resposta 01a", resp1a);

//Copiado do Erico durante a aula, não consegui fazer sozinho
const resp1b = colaboradores.reduce((acc, colab) =>{
    return Object.assign(acc, {[colab.cargo]: acc[colab.cargo]+1});
},{
    'front-end': 0,
    'back-end': 0,
    'designer': 0,
    'estagiario': 0    
})

console.log("Resposta 01b", resp1b);

const resp2a = colaboradores.slice().sort((a, b) =>{
    return a.idade - b.idade;
});
console.log("Resposta 02a", resp2a);

const resp2b = colaboradores.slice().sort((a, b) =>{
    return b.idade - a.idade;
});
console.log("Resposta 02b", resp2b);

const resp2c = colaboradores.slice().sort((a, b) =>{
    let a1 = 0;
    let b1 = 0;
    switch (a.cargo){
        case 'estagiario':
            a1= 1;
        break;
        case 'front-end':
            a1=2;
        break;
        case 'back-end':
            a1=3
        break;
        case 'designer':
            a1=4
        break;
    }
    switch (b.cargo){
        case 'estagiario':
            b1= 1;
        break;
        case 'front-end':
            b1=2;
        break;
        case 'back-end':
            b1=3
        break;
        case 'designer':
            b1=4
        break;
    }
    return a1 - b1;
});
console.log("Resposta 02c", resp2c);

const resp2d = colaboradores.slice().sort((a, b) =>{
    if(a.idade == b.idade){
        let a1 = 0;
        let b1 = 0;
        switch (a.cargo){
            case 'estagiario':
                a1= 1;
            break;
            case 'front-end':
                a1=2;
            break;
            case 'back-end':
                a1=3
            break;
            case 'designer':
                a1=4
            break;
        }
        switch (b.cargo){
            case 'estagiario':
                b1= 1;
            break;
            case 'front-end':
                b1=2;
            break;
            case 'back-end':
                b1=3
            break;
            case 'designer':
                b1=4
            break;
        }
        return a1 - b1;
    }else{
        return a.idade - b.idade;
    }
});
console.log("Resposta 02d", resp2d);