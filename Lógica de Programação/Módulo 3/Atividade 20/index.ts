class Pessoa{
    nome: string;
    idade:number;
    referencia:String;
    proxima: Pessoa|null;

    constructor(nome:string, idade:number, referencia:string){
        this.nome = nome;
        this.idade = idade;
        this.referencia = referencia;
        this.proxima = null;
    }
}

class ListaEncadeada{
    inicio:Pessoa|null;

    constructor(){
        this.inicio=null;
    }

    adicionarPessoa(nome: string, idade: number, referencia:string) {
        const novaPessoa = new Pessoa(nome, idade, referencia);

        if (!this.inicio) {
            this.inicio = novaPessoa;
        } else {
            let atual = this.inicio;
            while (atual.proxima) {
                atual = atual.proxima;
            }
            atual.proxima = novaPessoa;
        }
    }

    mostrarPessoas() {
        let atual = this.inicio;
        while (atual) {
            console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            atual = atual.proxima;
        }
    }

}

// Criando a lista encadeada de pessoas
const lista = new ListaEncadeada();

// Adicionando pessoas à lista
lista.adicionarPessoa("Alice", 25, "Maria");
lista.adicionarPessoa("Bob", 30, "Jose");
lista.adicionarPessoa("Carol", 28, "Pedro");

// Mostrando as pessoas da lista
lista.mostrarPessoas();
