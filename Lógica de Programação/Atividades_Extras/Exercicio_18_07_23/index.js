const prompt = require("prompt-sync")();

//Exercício 1
function exercicio1(){
    const num = prompt("Informe um número inteiro: ");
    if (num%2 === 0){
        console.log("O número é par!");
    } else {
        console.log("O número é ímpar!")
    }
}


//Exercício 2
function exercicio2(){
    const n1 = prompt("Informe o primeiro numero: ");
    const n2 = prompt("Informe o segundo numero: ");
    if(n1 > n2){
        console.log(`${n1} é o maior número`);
    } 
    else{
        if (n1 < n2){
            console.log(`${n2} é o maior número`);
        } 
        else{
            console.log("Os números são iguais");
        }
    }
}

//Exercício 3
function verificaPrimo(valor){
    for(let i = 2; i<valor; i++){
        if(valor%i === 0){
        return false;
        }    
    }
    return true;
}

function exercicio3(){
    const num = prompt("Informe um número inteiro positivo: ")
    var primo;
    console.log(`Número primos de 1 até ${num}`);
    for(var cont= 1; cont <= num; cont++){
        if(verificaPrimo(cont)){
            console.log(cont);
        }
    }
}

//Exercicio 4
function somatorio(lista){
    let soma = 0;
    for(let i =0; i<lista.length; i++){
        soma += lista[i];
    }  
    return soma;  
}

function exercicio4(){
    let lista=[];
    let n;
    for(var i =0; n!= -1; i++){
        n = parseInt(prompt("Digite um número (Sair= -1): "));
        if(n>0){
            lista[i] = n;
        }
    }
    console.log(`A média dos números digitados foi: ${somatorio(lista)/lista.length}`);
}

do{
    console.log("MENU");
    console.log("1 - Exercício 1");
    console.log("2 - Exercício 2");
    console.log("3 - Exercício 3");
    console.log("4 - Exercício 4");
    console.log("5 - Sair");
    var opcao = parseInt(prompt("Informe uma opção: "));

    switch(opcao){
        case 1:
            exercicio1();
        break
        case 2:
            exercicio2()
        break
        case 3:
            exercicio3();
        break
        case 4:
            exercicio4();
        break
        case 5:
            console.log("Programa Finalizado!");
        break
        default:
            console.log("Opção Inválida");
    }
}while(opcao!=5);

