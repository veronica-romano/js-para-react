/* mesclar uma lista de argumentos ou parâmetros para uma função */

function ordenar(...parametros) {
    return parametros.sort();
}

console.log(ordenar('Veronica', 'Guilherme', 'Glauber'));
console.log(ordenar('Dommu Borgir', 'Batoushka', 'Mayhem', 'Cradle of Filth', 'Venom'));