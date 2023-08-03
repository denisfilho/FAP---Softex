/*
Crie uma classe chamada "Animal" com um método chamado "falar".
Crie classes específicas que herdem de "Animal" 
(por exemplo: "Cachorro", "Gato", etc.)
e sobrescrevam o método "falar" para exibir o som característico de cada animal.
*/

class Animal{

    falar(){
        return "sem som específico"
    }
}

class Cachorro extends Animal{
    falar(){
        return "latido"
    }
}

class Gato extends Animal{
    falar(){
        return "miado"
    }    
}

class Cavalo extends Animal{
    //falar(){
        //return "relincho"
   // }clear

}

const cachorro1 = new Cachorro();
const gato1 = new Gato();
const cavalo1 = new Cavalo();

console.log(cachorro1.falar());
console.log(gato1.falar());
console.log(cavalo1.falar());