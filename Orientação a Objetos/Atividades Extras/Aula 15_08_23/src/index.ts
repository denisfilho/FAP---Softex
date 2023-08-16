function LoopExercicio1(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}

function LoopExercicio2(soma:number){
    let i=1;
    while(i<=100){
        soma+=i;
        i++;
    }
    console.log(soma)
}

function LoopExercicio3(){
    for(let i=0; i<=20;i++){
        if(i%2==0){
            console.log(i);
        }
        
    }
}

function LoopExercicio4(produtorio: number){

    let i=1;
    do{
        produtorio*=i;
        i++;
    }while(i<=5);

    console.log(produtorio);
}

function LoopExercicio5(termo: number){
    let anterior = 0;
    let posterior = 0;
    let aux;
    for(let i=1; i<=termo; i++){
        if(i==1 || i==2){
            anterior = 1;
            posterior = 1;
            console.log(1);
        }else{
            aux = anterior;
            anterior = posterior;
            posterior = anterior + aux;
            console.log(posterior);
        }

    }
}

function EstruturasCC1(num: number){
    if(num==0){
        console.log("O numero é zero");
    }else{
        if(num<0){
            console.log("O numero é negativo");
        }else{
            console.log("O número de positivo");
        }
    }
}

function EstruturasCC2(num: number){
    if(num%2 == 0){
        console.log("O número é par");
    }
    else{
        console.log("O númro é ímpar");
    }
}

function EstruturasCC3(ano:number){

    if(ano%4==0 && ano%100!=0){
        console.log("É bissexto");
    }
    else{
        if(ano%400==0){
            console.log("É bissexto");
        }
        else{
            console.log("Não é bissexto");
        }
    }

}
function EstruturasCC4(num1:number, num2:number, operador:string){
    switch (operador) {
        case "+":
            console.log(num1+num2);
            break;
        case "-":
            console.log(num1-num2);
            break;
        case "*":
            console.log(num1*num2);
            break;
        case "/":
            if(num2==0){
                console.log("não é possível efetuar divisão com base zero");
            }
            else{
                console.log(num1/num2);
            }
            break;
        default:
            break;
    }
}

function verificaPalindromo(palavra:string[]){
    for(let i=0, j=palavra.length-1; i<palavra.length/2; i++){
        if(palavra[i]!=palavra[j-i]){
            return false;
        }
    }
    return true;
}

function EstruturasCC5(palavra:string){
    if(verificaPalindromo(palavra.toLowerCase().split(''))){
        console.log(`${palavra} é palíndromo`);
    }else {
        console.log(`${palavra} NÃO é palíndromo`);
    }
}

function OutrosConceitosBasicos1(num:number){
    let fatorial=1;
    for(let i=2; i<=num;i++){
        fatorial*=i;
    }
    console.log(fatorial)
}

function OutrosConceitosBasicos2(num1: number, num2: number, num3: number){
    let maior;
    if(num1>num2 && num1>num3){
        maior = num1;
    }else{
        if(num2>num1 && num2>num3){
            maior = num2;
        }
        else{
            if(num3>num1 && num3>num1){
                maior = num3;
            }
        }
    }
    console.log(`O maior número é o ${maior}`);
}

function OutrosConceitosBasicos3(temp_celsius:number){
    console.log(`${temp_celsius}ºC equivale a ${(temp_celsius*9/5)+32}ºF`);
}

function OutrosConceitosBasicos4(nums:number[]){
    let soma = 0;
    for(let i=0; i<nums.length;i++){
        soma+=nums[i];
    }

    console.log(`A média dos número é ${soma/nums.length}`);
}

function OutrosConceitosBasicos5(array:number[]){
    let novo_array:number[] = [];
    for(let i=0; i<array.length; i++){
        if(novo_array.indexOf(array[i])==-1){
            novo_array.push(array[i]);
        }
    }
    console.log(novo_array);
}

function OutrosConceitosBasicos6(palavra:string){
    let palavra_inv = palavra.split('').reverse();
    console.log(`${palavra} ao contrário fica ${palavra_inv.join('')}`);
}

function LaçosEstruturasCondicionais1(){
    for(let i=1; i<=50;i++){
        if(i%3==0 &&i%5==0){
            console.log("SofTex");
        } else{
            if(i%3==0){
                console.log("Sof");
            }else{
                if(i%5==0){
                    console.log("Tex");
                }else{
                    console.log(i);
                }
            }
        }
    }
}

function LaçosEstruturasCondicionais2(){
    for(let i=1;i<=10;i++){
        console.log(`TABUADA DE ${i}`);
        for(let j=1;j<=10;j++){
            console.log(`${j} x ${i} = ${j*i}`);
        }
    }
}

function LaçosEstruturasCondicionais3(num:number){
    console.log(num);
    while(num!=1){
        if(num%2==0){
            num/=2;
        }else{
            num=num*3+1;
        }
        console.log(num);
    }
}

function verificaPrimo(valor){
    for(let i = 2; i<valor; i++){
        if(valor%i === 0){
        return false;
        }    
    }
    return true;
}

function LaçosEstruturasCondicionais4(valor:number){
    if(verificaPrimo(valor)){
        console.log(`${valor} é primo`);
    } else{
        console.log(`${valor} NÂO é primo`);
    }
}

function TrabalhandoComStrings1(palavra:string){
    let vetor_palavra = palavra.toLowerCase().split('');
    let cont_vogais =0;
    for(let i=0;i<vetor_palavra.length;i++){
        if(vetor_palavra[i]=='a' || vetor_palavra[i]=='e' || 
        vetor_palavra[i]=='i' || vetor_palavra[i]=='o' || vetor_palavra[i]=='u'){
            cont_vogais++;
        }
    }
    console.log(`Total de vogais na palavra ${palavra} = ${cont_vogais}`);
}
function TrabalhandoComStrings2(palavra:string){

    console.log(palavra.toUpperCase());
}

function TrabalhandoComStrings3(palavra:string){

    let nova_palavra = palavra.split(' ');
    console.log(nova_palavra.join(''));
}

function TrabalhandoComStrings4(palavra:string, letra_procurada:string){
    let vetor_palavra = palavra.split('');
    let ocorrencias = 0;
    vetor_palavra.forEach(letra => {
        if(letra === letra_procurada){
            ocorrencias++;
        }
    });

    console.log(`O número de ocorrências da letra '${letra_procurada}' na palavra '${palavra}' é ${ocorrencias}`);
}

function Arrays1(num_array:number[]){
    console.log(num_array.sort());
}

function Arrays2(num_array:number[]){
    let maior = num_array[0];
    for(let i=0; i<num_array.length;i++){
        if(maior<num_array[i]){
            maior = num_array[i];
        }
    }
    console.log(`O maior valor do array foi: ${maior}`);
}

function Arrays3(num_array:string[]){
    console.log(num_array.sort());
}

function Arrays4(array1:number[], array2:number[]){
    let array_resultado= [];
    if(array1.length == array2.length){
        for(let i =0; i< array1.length;i++){
            array_resultado.push(array1[i]+array2[i]);
        }
    }
    console.log(array_resultado);
}

function Arrays5(num_array:number[]){
    let maior_ocorrencia;
    let maior_num_ocorrencia =0;
    for(let i=0; i< num_array.length;i++){
        let contador_aux_ocorrencia = 0;
        for(let j=0; j<num_array.length; j++){
            if(num_array[i]==num_array[j]){
                contador_aux_ocorrencia++;
            }
        }
        if(maior_num_ocorrencia<contador_aux_ocorrencia){
            maior_num_ocorrencia = contador_aux_ocorrencia;
            maior_ocorrencia = num_array[i];
        }
    }
    console.log(`A maior ocorrência foi do numero ${maior_ocorrencia} com ${maior_num_ocorrencia} ocorrências`);
}


//LoopExercicio1();
//LoopExercicio2(0);
//LoopExercicio3();
//LoopExercicio4(1);
//LoopExercicio5(10);

//EstruturasCC1(-8);
//EstruturasCC2(3);
//EstruturasCC3(2000);
//EstruturasCC4(1,4,"/");
//EstruturasCC5("Arara");

//OutrosConceitosBasicos1(5);
//OutrosConceitosBasicos2(-1,3,0);
//OutrosConceitosBasicos3(10)
//OutrosConceitosBasicos4([1,2,3,4]);
//OutrosConceitosBasicos5([1,1,2,3,4,5,5,6,6,6,6]);
//OutrosConceitosBasicos6("hello");

//LaçosEstruturasCondicionais1();
//LaçosEstruturasCondicionais2();
//LaçosEstruturasCondicionais3(13);
//LaçosEstruturasCondicionais4(15);

//TrabalhandoComStrings1("Softex");
//TrabalhandoComStrings2("Softex");
//TrabalhandoComStrings3("Softex Caruaru 2023");
//TrabalhandoComStrings4("Softex Caruaru 2023", "a");

//Arrays1([2,5,1,4,7,8,3,5,6,8]);
//Arrays2([2,5,1,4,7,8,3,5,6,8]);
//Arrays3(["Manuela", "João", "Monique", "Pedro", "Bê", "Pablo"]);
//Arrays4([1,2,3,4,5], [6,7,8,9,10]);
//Arrays5([2,5,1,4,7,8,3,5,6,8, 8]);