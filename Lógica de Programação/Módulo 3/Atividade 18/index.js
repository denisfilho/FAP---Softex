const prompt = require("prompt-sync")();
let animais = [];

let continua = "sim";

for (let i=0; continua.toLowerCase()!= 'não'; i++){

    animais[i] = [];
    
    animais[i][0] = prompt("Informe o nome do animal: ");
    animais[i][1] = prompt("Informe a espécie: ");
    animais[i][2] = parseInt(prompt("Informe a idade: "));

    continua = prompt("Deseja continuar? (digite sim ou não): ")

    console.clear();
}

console.log(animais);