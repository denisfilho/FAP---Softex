var valor_boolean;
var valor_bigint;
var valor_string;
var valor_symbol;

function Imprimir(){
    console.log(valor_boolean);
    console.log(valor_bigint);
    console.log(valor_string);
    console.log(valor_symbol);
}

Imprimir();

valor_boolean = null;
valor_bigint = null;
valor_string = null;
valor_symbol = null;

Imprimir();

valor_boolean = true;
valor_bigint = 2^54;
valor_string = "Helo World";
valor_symbol = Symbol("Tipo symbol");

Imprimir();