/* mesclar uma lista de argumentos ou parâmetros para uma função */

/* 
sem arrow
function ordenar = (...parametros) => {
    return parametros.sort();
} */

//com arrow
const ordenar = (...parametros) => parametros.sort();

const bandas = ['Dommu Borgir', 'Batoushka', 'Mayhem', 'Cradle of Filth', 'Venom']
console.log(ordenar('Veronica', 'Guilherme', 'Glauber'));
console.log(ordenar('Dommu Borgir', 'Batoushka', 'Mayhem', 'Cradle of Filth', 'Venom'));
console.log(ordenar(...bandas));
console.log(ordenar(...['Dommu Borgir', 'Batoushka', 'Mayhem', 'Cradle of Filth', 'Venom']));

const soma = (...valores) => {
    let total = 0;
    for (let valor of valores) {
        total += valor;
    }
    return total;
}

console.log(soma(0,1,2,3,4,5,6,7,8,9));