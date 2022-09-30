/* Map: itera elementos do array e realiza operações através de função(callback) gerando um outro array */

const numeros = [10, 20, 30, 40, 50];
const nomes = ['veronica', 'guilherme', 'glauber', 'palloma', 'matilda']
const vendas = [1500, 2000, 10000, 500, 100000]
const listaAlunos = ['Quico', 'Nhonho', 'Chiquinha', 'Chaves', 'Pópis', 'Godinez']
const cursos = [
    { id: 1, titulo: 'HTML5 e CSS3', categoria: 'Front-End', preco: 500},
    { id: 2, titulo: 'JS e React', categoria: 'Front-End', preco: 800},
    { id: 3, titulo: 'React Native', categoria: 'Mobile', preco: 700},
    { id: 4, titulo: 'Photoshop e Adobe XD', categoria: 'Design', preco: 400},
    { id: 5, titulo: 'PHP e MySQL', categoria: 'Back-End', preco: 600},
    { id: 6, titulo: 'Node', categoria: 'Back-End', preco: 500},
    { id: 7, titulo: 'Flutter', categoria: 'Mobile', preco: 900}
]

const valores = [10, 10, 10, 10, 10];

/* const numerosDobrados = [numeros.map(function(numero){
    return numero *2
})] */
//mesma função, com arrow
const nomesCaps = nomes.map(nome=>nome.toUpperCase());
const numerosDobrados = [numeros.map(numero => numero *2)]

const meta = 1000

/* filter:  */
const superouMeta = vendas.filter(venda => venda > meta)
/* const iniciaComC = listaAlunos.filter(aluno => {
    //if (aluno.charAt(0) == 'C') 
    if (aluno.startsWith('C')) {
        return aluno
    }
}); */

/* reduce: reduzir a um unico valor/resultado */

const iniciaComC = listaAlunos.filter(aluno => aluno.startsWith('C') ?? aluno)
const cursosFront = cursos.filter(curso => curso.categoria == 'Front-End');
const titulosCursos = cursos.map(curso => curso.titulo);
const titulosFront = cursos.filter(curso => curso.categoria == 'Front-End').map(curso => curso.titulo);
const soma = valores.reduce((acumulador, valor) => {
    return acumulador + valor
}, 0);

const somaPrecoMobile = cursos
                        .filter(curso => curso.categoria == 'Mobile')
                        .reduce((acumulador, curso) => {
                            return acumulador + curso.preco
                        }, 0);

console.log(numeros); //[ 10, 20, 30, 40, 50 ]
console.log(numerosDobrados); //[ [ 20, 40, 60, 80, 100 ] ]
console.log('--------------------------------------------------------');
console.log(nomes);//[ 'veronica', 'guilherme', 'glauber', 'palloma', 'matilda' ]
console.log(nomesCaps); //[ 'VERONICA', 'GUILHERME', 'GLAUBER', 'PALLOMA', 'MATILDA' ]
console.log('--------------------------------------------------------');
console.log(vendas); //[ 1500, 2000, 10000, 500, 100000 ]
console.log(superouMeta); //[ 1500, 2000, 10000, 100000 ]
console.log('--------------------------------------------------------');
console.log(iniciaComC); //[ 'Chiquinha', 'Chaves' ]
console.log('--------------------------------------------------------');
console.log(cursos);
console.log(cursosFront);
console.log(titulosCursos);
console.log(titulosFront);
console.log('--------------------------------------------------------');
console.log(soma);
console.log(somaPrecoMobile);