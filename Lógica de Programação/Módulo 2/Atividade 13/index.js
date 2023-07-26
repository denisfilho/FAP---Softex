const prompt = require("prompt-sync")();

function somar(num1, num2){
    return num1+num2
}

function subtrair(num1, num2){
    return num1-num2
}

function multiplicar(num1, num2){
    return num1*num2
}

function dividir(num1, num2){
    if (num2 === 0){
        return "Não é possivel dividir pois o denominador é zero"
    }
    return num1/num2
}

let opcao;
do{
    console.log("1 - Adição")
    console.log("2 - Subtração")
    console.log("3 - Multiplicação")
    console.log("4 - Divisão")
    console.log("5 - Sair")
    opcao = parseInt(prompt("Informe uma opção: "))
    if(opcao>=1 && opcao<5){
        var num1 = parseInt(prompt("Informe o primeiro número: "))
        var num2 = parseInt(prompt("Informe o segundo número: "))
    }
    
    switch(opcao){
        case 1:
            console.log(`O resultado foi: ${somar(num1, num2)}`)
        break
        case 2:
            console.log(`O resultado foi: ${subtrair(num1, num2)}`)
        break
        case 3:
            console.log(`O resultado foi: ${multiplicar(num1, num2)}`)
        break
        case 4:
            console.log(`O resultado foi: ${dividir(num1, num2)}`)
        break
        case 5:
            console.log("Saindo do Programa")
        break
        default:
            console.log("Operação Inválida!")
    }
}while(opcao!=5)