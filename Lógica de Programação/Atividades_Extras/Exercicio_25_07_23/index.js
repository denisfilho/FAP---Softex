const prompt = require("prompt-sync")();

function Exercicio1(){
    console.log("Hello World");
}

//Exercicio1();

function Exercicio2(){
    const nome = prompt("Informe seu nome: ");
    console.log(`Olá ${nome}!`)
}
//Exercicio2();

function Exercicio3(){
    const num1 = parseInt(prompt("Informe o primeiro número: "));
    const num2 = parseInt(prompt("Informe o segundo número: "));

    console.log(`A média dos números informados é ${(num1 + num2)/2}`);
}
//Exercicio3();

function Exercicio4(){
    const idade = prompt("Informe a idade: ");

    if (idade>= 18){
        console.log("Maior de Idade");
    } else{
        console.log("Menor de Idade")
    }
}
//Exercicio4();

function Exercicio5(){
    const num = prompt("Informe um numero: ");

    if(num%2===0){
        console.log("Informe é par");
    }else{
        console.log("Informe é impar");
    }
}

//Exercicio5();

function Exercicio6(){
    let media = 0;

    for(let i=0; i<3; i++){
        media += parseInt(prompt(`Informe o ${i+1}º num: `));
    }
    console.log(`A média nos 3 numers informados é: ${media/3}`);
}
//Exercicio6();

function Exercicio7(){
    for(let i=1; i<11; i++){
        console.log(`${i}`);
    }
}
//Exercicio7();

function Exercicio8(){
    for(let i=1; i<=20; i++){
        if(i%2===0){
            console.log(`${i}`);
        }
        
    }    
}
//Exercicio8();

function verificaPrimo(valor){
    for(let i=2; i<valor/2; i++){
        if(valor%i===0){
            return false;
        }
    }
    return true;
}

function Exercicio9(){
    const num= prompt("Informe um num: ");

    if (verificaPrimo(num)){
        console.log(`O número ${num} é primo!`);
    } else{
        console.log(`O número ${num} NÃO é primo!`);    
    }

}

//Exercicio9();

function Exercicio10(){
    const temp_celsius = prompt("Informe a temperatura em Celcius: ");

    console.log(`${temp_celsius}ºC equivale a ${(temp_celsius*9/5)+32}ºF`);
}
//Exercicio10();

function Exercicio11(){
    let lista = [];
    let num;
    for(let i=0; num!=0; i++){
        num = parseInt(prompt("Digite um número (Para sair digite '0'): "));
        if (num!=0){
            lista[i] = num;
        }
    }
    console.clear();
    console.log("Números pares informados:")
    for(let i=0; i<lista.length; i++){
        if (lista[i]%2===0){
            console.log(lista[i]);
        }
    }
}
//Exercicio11();

function Exercicio12(){
    let num, maior, menor;
    let primeiro_valor = true;
    while(num!='sair'){
        num = prompt("Informe um numero (Para sair digite 'sair'): ");
        if (num!='sair'){
            num = parseFloat(num);
            if(primeiro_valor){
                menor = num;
                maior = num;
                primeiro_valor = false;
            } else{
                if(num>maior){
                    maior = num;
                }
                if(num<menor){
                    menor = num;
                }
            }
        }
    }
    console.clear();
    console.log(`O maior valor = ${maior}`);
    console.log(`O menor valor = ${menor}`);
}

//Exercicio12();
function verificaPalindromo(palavra){
    for(let i=0, j=palavra.length-1; i<palavra.length/2; i++){
        if(palavra[i]!=palavra[j-i]){
            return false;
        }
    }
    return true;
}
function Exercicio13(){
    let palavra = prompt("Informe a palavra: ");
    if(verificaPalindromo(palavra.split(''))){
        console.log(`${palavra} é palíndromo`);
    }else {
        console.log(`${palavra} NÃO é palíndromo`);
    }
}

//Exercicio13();

function Exercicio14(){
    //let lista = [1,2,3,4,5];
    let lista = [1,2,3,4];
    let aux;
    for(let i=0, j=lista.length-1; i<lista.length/2;i++){
        aux = lista[i];
        lista[i] = lista[j-i];
        lista[j-i] = aux;
    }
    for(let i=0; i<lista.length; i++){
        console.log(lista[i]);
    }
}
//Exercicio14();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Exercicio15(){
    num = getRandomIntInclusive(0,10);
    console.log(num);
}

//Exercicio15();