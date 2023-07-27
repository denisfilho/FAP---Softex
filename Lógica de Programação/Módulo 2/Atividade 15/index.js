const prompt = require("prompt-sync")();

let ano;

let nome = prompt("Digite seu nome: ");
do{
    ano = parseInt(prompt("Informe o ano entre 1922 e 2021: "));
    if(ano<1922||ano>2021){
        console.log("Insira um ano válido entre 1922 e 2021");
    }
}while(ano<1922||ano>2021)

console.log(`${nome}, em 2022 você terá ${2022 - ano} anos`);