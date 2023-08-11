export class Calculadora{

    private numero1: number;
    private numero2: number;

    constructor(){
        this.numero1 = 0;
        this.numero2 = 0;
    }

    setNumero1(numero1:number){
        this.numero1 = numero1;
    }

    setNumero2(numero2:number){
        this.numero2 = numero2;
    }

    Somar(){
        return this.numero1 + this.numero2;
    }

    Subtrair(){
        return this.numero1 - this.numero2;
    }

    Multiplicar(){
        return this.numero1 * this.numero2;
    }

    Dividir(){
        if(!this.ValidarNumero2()){
            return this.numero1 / this.numero2;
        }else{
            return "Não é possivel realizar divisão pois o segundo número é 0";
        }
    }

    ValidarNumero2(){
        return this.numero2 == 0;
    }
}