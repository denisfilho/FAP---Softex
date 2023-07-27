const prompt = require("prompt-sync")();
const candidatos={
    candidato_X : 889,
    candidato_Y : 847,
    candidato_Z : 515,
    branco : 0
}

var votos={
    candidato_X : 0,
    candidato_Y : 0,
    candidato_Z : 0,
    brancos_nulos : 0
}

function votacao(){
    let voto;
    let tecla;

    do{
        console.clear();
        console.log("Para sair digite 'sim'");
        voto = prompt("Informe o número do candidato: ");
        
        
        if(!voto.toString().toLowerCase().includes('sim')){
            voto = parseInt(voto);

            if(voto === candidatos.candidato_X){
                votos.candidato_X++;
            }
            else{
                if(voto === candidatos.candidato_Y){
                    votos.candidato_Y++;
                }
                else{
                    if(voto === candidatos.candidato_Z){
                        votos.candidato_Z++;
                    }
                    else{
                        votos.brancos_nulos++;
                    }
                }
            }
            console.log("Voto computado!");
            teclado = prompt("Aperte ENTER para continuar...")
        }
        else{
            console.log("Finalizando votação");
        }
    }while(!voto.toString().toLowerCase().includes('sim'))
}

function verificaEmpate(){
    if(votos.candidato_X === votos.candidato_Y & votos.candidato_X === votos.candidato_Z){
        console.log("Houve empate nos 3 candidatos");
        return true;
    }
    else{
        if(votos.candidato_X === votos.candidato_Y){
            if(votos.candidato_X > votos.candidato_Z){
                console.log("Houve um empate nos candidatos X e Y");
                return true;
            }
            else{
                console.log("O candidato vencedor foi o Candidato Z");
                return true;
            }
        }
        else{
            if(votos.candidato_X === votos.candidato_Z){
                if(votos.candidato_X > votos.candidato_Y){
                    console.log("Houve um empate nos candidatos X e Z");
                    return true;
                }
                else{
                    console.log("O candidato vencedor foi o Candidato Y");
                    return true;
                }
            }
            else{
                if(votos.candidato_Y === votos.candidato_Z){
                    if(votos.candidato_Y > votos.candidato_X){
                        console.log("Houve um empate nos candidatos Y e Z");
                        return true;
                    }
                    else{
                        console.log("O candidato vencedor foi o Candidato X");
                        return true;
                    }
                }    
            }
        }
    }
    return false;
}

function apuracao(){
    console.clear();
    console.log(votos);
    if(!verificaEmpate()){
        if(votos.candidato_X>votos.candidato_Y & votos.candidato_X>votos.candidato_Z){
            console.log("O candidato vencedor foi o Candidato X");
        }
        else{
            if(votos.candidato_Y>votos.candidato_X & votos.candidato_Y>votos.candidato_Z){
                console.log("O candidato vencedor foi o Candidato Y");
            }
            else{
                if(votos.candidato_Z>votos.candidato_X & votos.candidato_Z>votos.candidato_Y){
                    console.log("O candidato vencedor foi o Candidato Z");
                }
            }
        }
        
        
    }
}

votacao();
apuracao();






