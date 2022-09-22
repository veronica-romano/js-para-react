/* Formas de trabalhas com funções */
//sintaxe tradicional
function nomeFuncao(){
    console.log('olha a function ai gente')
}
//sintaxe de funcao anonima
var outraFuncao = function(){
    console.log('que função mais anônima')
};
//chamadas da função
nomeFuncao()
outraFuncao()

/* crie uma função que receba dois valores numéricos, calcule a diferença entre eles e retorne o resultado para uma variaavel externa */

function diferenca(num1, num2){
    let resultado;
    if (num1 > num2) {
        resultado = num1 - num2;
    } else if (num2 > num1){
        resultado =  num2 - num1;
    } else{
        resultado = 'Os números são iguais';
    }
    return resultado
}
let diff = diferenca(80,8)
console.log(diff)

//arrow function com chaves poius faz mais coisas
const difArrow = (num1, num2) => {
    let resultado;
    if (num1 > num2) {
        resultado = num1 - num2;
    } else if (num2 > num1){
        resultado =  num2 - num1;
    } else{
        resultado = 'Os números são iguais';
    }
    return resultado
};

let difAr = diferenca(80,8)
console.log(difAr)

//arrow function sem chaves pois tem apenas uma linha
const exemplo1 = () => console.log('Uma arrow function qualquer...')
exemplo1()

//arrow function sem chaves pois tem apenas uma linha e sem parenteses pois tem apenas um argumento
const metade = valor => valor / 2;
console.log(metade(1000))

const multiplicaValores = (val1, fator) => val1 * fator;
console.log(multiplicaValores(5,5))
console.log('------------------------------------------')
console.log(multiplicaValores(4,9))

/* Monte uma arrow function que receba o nome de uma pessoa e a converta para letras maiusculas */

const nomeCaps = nome1 => nome1.toUpperCase();
console.log(nomeCaps('Veronica'))
console.log(nomeCaps('Guilherme'))
console.log(nomeCaps('Luna'))