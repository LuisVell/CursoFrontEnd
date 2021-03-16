array1=[1,2,3]
array2=[3,4,5]
const user = {
    nome: 'Usuário',
    idade: 25,
    emprego:"garçom"
}
const user2 = {
    nome: 'Usuário2',
    idade: 25,
    altura: 1.5
}
//resposta 1
function printe(...rest){
    console.log(...rest)
}
//resposta 2
function printName({ nome }){
    console.log(nome)
}
printName(user)
//resposta 3
function mescObj(Obj1, obj2){
    return{...Obj1, ...obj2}
}
let res3=mescObj(user, user2)
console.log(res3)
//resposta 4
function concArr(arr1, arr2){
    return[...arr1, ...arr2]
}
let res4=concArr(array1, array2)
console.log(res4)