//Resposta 1
const p1 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Promise 1")
        },1000)
    }
)}
const p2 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Promise 2")
        },1500)
    }
)}
const p3 = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Promise 3")
        },2000)
    }
)}

//resposta 2
async function asynFunc2(){
    try {
        const res2 = await Promise.resolve([p1(), p2(), p3()])
        console.log("Resposta 2: ", res2)
    } catch (error) {
        console.log(error)
    }
}
asynFunc2()

//reposta 3
async function asynFunc3(){
    try {
        const res3 = await Promise.all([p1(), p2()])
        console.log("Resposta 3: ",res3)
    } catch (error) {
        console.log('Erro:', error)
    } finally{
        console.log("Final da execução")
    }
}
asynFunc3()