/*
* Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.

* Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console
uma mensagem com o nome e a idade da pessoa.
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

const prompt = require("prompt-sync")();

const nome = prompt("Nome: ")
const idade = parseInt(prompt("Idade: "))
const pessoa1 = new Pessoa(nome, idade);

pessoa1.apresentar();