import { gerarEmpresas } from "./gerar-empresas.mjs";

function imprimirMaiorPedido(empresa, pedido){
    console.log("Dados do Pedido de Maior Valor");
    console.log("Informações da Empresa");
    console.log(`- Nome: ${empresas[empresa].nome}`);
    console.log(`- Endereço: ${empresas[empresa].endereco}`);
    console.log(`- Telefone: ${empresas[empresa].telefone}`);
    console.log(`- Email: ${empresas[empresa].email}`);

    console.log("Informações do Pedido de Maior Valor");
    console.log(`- Data do Pedido: ${empresas[empresa].pedidos[pedido].data}`);
    console.log(`- Valor: ${empresas[empresa].pedidos[pedido].valor}`);
    console.log(`- Status: ${empresas[empresa].pedidos[pedido].status}`);
}
function verificarMaiorPedido(){
    let maior = 0;
    let empresa, pedido;
    for(let i=0;  i< empresas.length; i++){
        for(let j=0; j< empresas[i].pedidos.length; j++){
            //console.log(empresas[i].pedidos[j].valor);
            if(maior<empresas[i].pedidos[j].valor){
                maior = empresas[i].pedidos[j].valor;
                empresa = i;
                pedido = j;
            }
        }
    }
    imprimirMaiorPedido(empresa, pedido);
}

const empresas = gerarEmpresas(10);

//console.dir(empresas, {depth: null});

verificarMaiorPedido();