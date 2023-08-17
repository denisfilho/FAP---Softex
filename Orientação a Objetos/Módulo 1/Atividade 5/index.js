const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Informe a 1ª nota entre 0 e 10: "));
let nota2 = parseFloat(prompt("Informe a 2ª nota entre 0 e 10: "));
let nota3 = parseFloat(prompt("Informe a 3ª nota entre 0 e 10: "));

let media = (nota1 + nota2 + nota3)/3;

console.log(media);