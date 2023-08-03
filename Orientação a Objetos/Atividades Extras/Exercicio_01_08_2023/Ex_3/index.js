/*
Modifique a classe "Pessoa" (do Exercício 1) para que o atributo "idade" seja privado.
Crie métodos getters e setters para acessar e alterar o valor da idade, 
respeitando o encapsulamento.
*/ 

class Pessoa{
    _idade; //nformando que o atributo é private

    constructor(nome, idade){
      this.nome = nome;
      this._idade = idade;
    }
  
    apresentar(){
      console.log(`Nome: ${this.nome}, Idade ${this._idade}`);
    }
    setIdade(idade){
        this._idade=idade;
    }
    getIdade(){
        return this._idade;
    }
  }

const prompt = require("prompt-sync")();

const nome = prompt("Nome: ")
const idade = parseInt(prompt("Idade: "))
const pessoa1 = new Pessoa(nome, idade);

pessoa1.apresentar();

//Alterando a Idade
pessoa1.setIdade(20)
console.log(`Nova idade: ${pessoa1.getIdade()}`);