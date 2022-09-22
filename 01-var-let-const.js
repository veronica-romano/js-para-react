/* Jeito antigo de usar variáveis (não utilizar em projetos novos) */
var meuNome = 'Veronica';
console.log(meuNome);

/* Jeito moderno de declarar variáveis (recomendado) */

let seuNome = 'Veronica';
console.log(seuNome);

const outroNome = 'Veronica'; //inicialização obrigatória, não pode existir outra inicialização com outro valor para a mesma variável.
console.log(outroNome);

let idade = 28;
let mensagem = ''; // ESCOPO GLOBAL POIS FOI CRIADA FORA DO BLOCO
if (idade >= 18) {
    mensagem = 'É maior de idade'
} else {
    mensagem = 'É menor de idade' 
}

console.log(mensagem); // É maior de idade

/* Let e const possuem escopo de bloco */