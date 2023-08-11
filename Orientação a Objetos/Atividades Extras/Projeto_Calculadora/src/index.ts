import { Calculadora } from "./Calculadora";

import PromptSync from  "prompt-sync";

const prompt = PromptSync();
const calculadora = new Calculadora();

function Pressione(){
    const tecla = prompt("Pressione qualquer tecla pra continuar...");
    console.clear();
}

function Menu(){
    let opcao =0;
    do{
        console.log("CALCULADORA");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Multplicação");
        console.log("4 - Divisão");
        console.log("5 - Sair")
        opcao = parseInt(prompt("Escolha uma operação: "));

        if(opcao>0 && opcao<5){
            salvandoNumeros();
        }

        switch(opcao){
            case 1:
                console.log(`O resultado foi: ${calculadora.Somar()}`);
            break
            case 2:
                console.log(`O resultado foi: ${calculadora.Subtrair()}`)
            break
            case 3:
                console.log(`O resultado foi: ${calculadora.Multiplicar()}`)
            break
            case 4:
                console.log(`O resultado foi: ${calculadora.Dividir()}`)
            break
            case 5:
                console.log("Programa Finalizado");
            break
            default:
                console.log("Opção Inválida!");
        }
        Pressione();
    }while(opcao!=5);
}

function salvandoNumeros(){
    console.clear();
    const n1 = parseInt(prompt("Informe o primeiro número: "));
    calculadora.setNumero1(n1);

    const n2 = parseInt(prompt("Informe o segundo número: "));
    calculadora.setNumero2(n2);
}

Menu();