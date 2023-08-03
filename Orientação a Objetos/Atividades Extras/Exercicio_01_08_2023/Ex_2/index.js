/*
* Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
A classe "Aluno" deve ter um atributo adicional chamado "matricula".
Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.
*/

class Pessoa{
    constructor(nome, idade){
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar(){
      console.log(`Nome: ${this.nome}, Idade ${this.idade}`);
    }
  }

  class Aluno extends Pessoa{
    constructor(nome, idade, matricula){
        super(nome,idade)
    }  
    apresentar(){
        console.log(`Nome: ${this.nome} \nIdade ${this.idade} \nMatrícula: ${matricula}`);
      }
  }

  const prompt = require("prompt-sync")();

const nome = prompt("Nome: ")
const idade = parseInt(prompt("Idade: "))
const matricula = parseInt(prompt("Matricula: "))
const aluno = new Aluno(nome, idade, matricula);

console.clear();

aluno.apresentar();