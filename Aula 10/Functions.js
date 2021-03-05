const subtrai=function(n1, n2){
    return n1-n2;
}

const testaZero= (n1) => console.log(n1== 0?"é zero":"não é zero");

//Não sei se entendi corretamente oq o desafio propunha nessa parte
function testaSinal(n1, n2){
    if(n1==n2){
        console.log("É zero");
    } else if(((n1<0)&&(n2>0))||((n1>0)&&(n2<0))){
        console.log("Subtração entre numeros de sinais diferentes");
    }else if(((n1>0)&&(n2>0))||((n1<0)&&(n2<0))){
        console.log("Subtração entre numeros de mesmo sinal");
    }
}