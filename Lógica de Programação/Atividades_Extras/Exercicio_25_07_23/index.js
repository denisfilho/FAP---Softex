const prompt = require("prompt-sync")();

function exercicio1(){
    console.log("Hello World");
}

function exercicio2(){
    const nome = prompt("Informe seu nome: ");
    console.log(`Olá ${nome}!`)
}

function exercicio3(){
    const num1 = parseInt(prompt("Informe o primeiro número: "));
    const num2 = parseInt(prompt("Informe o segundo número: "));

    console.log(`A média dos números informados é ${(num1 + num2)/2}`);
}

function exercicio4(){
    const idade = prompt("Informe a idade: ");

    if (idade>= 18){
        console.log("Maior de Idade");
    } else{
        console.log("Menor de Idade")
    }
}

function exercicio5(){
    const num = prompt("Informe um numero: ");

    if(num%2===0){
        console.log("Informe é par");
    }else{
        console.log("Informe é impar");
    }
}

function exercicio6(){
    let media = 0;

    for(let i=0; i<3; i++){
        media += parseInt(prompt(`Informe o ${i+1}º num: `));
    }
    console.log(`A média nos 3 numers informados é: ${media/3}`);
}

function exercicio7(){
    for(let i=1; i<11; i++){
        console.log(`${i}`);
    }
}

function exercicio8(){
    for(let i=1; i<=20; i++){
        if(i%2===0){
            console.log(`${i}`);
        }
        
    }    
}

function verificaPrimo(valor){
    for(let i=2; i<valor/2; i++){
        if(valor%i===0){
            return false;
        }
    }
    return true;
}

function exercicio9(){
    const num= prompt("Informe um num: ");

    if (verificaPrimo(num)){
        console.log(`O número ${num} é primo!`);
    } else{
        console.log(`O número ${num} NÃO é primo!`);    
    }

}

function exercicio10(){
    const temp_celsius = prompt("Informe a temperatura em Celcius: ");

    console.log(`${temp_celsius}ºC equivale a ${(temp_celsius*9/5)+32}ºF`);
}

function exercicio11(){
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

function exercicio12(){
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

function verificaPalindromo(palavra){
    for(let i=0, j=palavra.length-1; i<palavra.length/2; i++){
        if(palavra[i]!=palavra[j-i]){
            return false;
        }
    }
    return true;
}

function exercicio13(){
    let palavra = prompt("Informe a palavra: ");
    if(verificaPalindromo(palavra.split(''))){
        console.log(`${palavra} é palíndromo`);
    }else {
        console.log(`${palavra} NÃO é palíndromo`);
    }
}

function exercicio14(){
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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exercicio15(){
    let num_aleatorio = getRandomIntInclusive(0,10);
    console.log("Tente advinhar o número de 0 a 10 escolhido pelo computador");
    let num_informado = prompt("Informe aqui o número: ");
    if(num_aleatorio===num_informado){
        console.log("Parabéns você acertou o número");
    } else{
        console.log(`Você errou! O número escolhido pelo computador foi ${num_aleatorio}`);
    }
}

function continuar(){
    let tecla = prompt("Pressione ENTER para continuar...");
    console.clear();
}

let opcao;
do{
    console.log("Menu");
    console.log("1 - Imprime 'Olá Mundo' ");
    console.log("2 - Imprime nome na tela");
    console.log("3 - Soma de 2 inteiros");
    console.log("4 - Verifica maior de idade")
    console.log("5 - Verifica par e ímpar");
    console.log("6 - Média de 3 números");
    console.log("7 - Imprimir de 1 a 10 em ordem crescente");
    console.log("8 - Imprime pares de 1 a 20");
    console.log("9 - Verifique se é primo");
    console.log("10 - Converter Celsius para Fahrenheit");
    console.log("11 - Imprime pares de uma lista");
    console.log("12 - Verifica maior e menor de uma lista");
    console.log("13 - Verifica palíndromo");
    console.log("14 - Inverte ordem de uma lista");
    console.log("15 - Jogo de advinhação");
    console.log("16 - Sair");
    opcao = parseInt(prompt("Informe uma opcao: "));

    console.clear();

    switch(opcao){
        case 1:
            exercicio1();
            continuar();
        break
        case 2:
            exercicio2();
            continuar();
        break
        case 3:
            exercicio3();
            continuar();
        break
        case 4:
            exercicio4();
            continuar();
        break
        case 5:
            exercicio5();
            continuar();
        break
        case 6:
            exercicio6();
            continuar();
        break
        case 7:
            exercicio7();
            continuar();
        break
        case 8:
            exercicio8();
            continuar();
        break
        case 9:
            exercicio9();
            continuar();
        break
        case 10:
            exercicio10();
            continuar();
        break
        case 11:
            exercicio11();
            continuar();
        break
        case 12:
            exercicio12();
            continuar();
        break
        case 13:
            exercicio13();
            continuar();
        break
        case 14:
            exercicio14();
            continuar();
        break
        case 15:
            exercicio15();
            continuar();
        break
        case 16:
            console.log("Finalizando Programa");
            continuar();
        break
        default:
            console.log("Opção Inválida");
            continuar();
    }
}while(opcao!=16);