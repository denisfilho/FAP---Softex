const prompt = require("prompt-sync")();

let nome = prompt("Informe o nome: ");
let salario = parseInt(prompt("Informe o salario: "));
let idade = parseInt(prompt("Informe a idade: "));
let diploma = prompt("Possui diploma? (sim ou não): ");

diploma = diploma === "sim";

console.log(nome);
console.log(salario);
console.log(idade);
console.log(diploma);