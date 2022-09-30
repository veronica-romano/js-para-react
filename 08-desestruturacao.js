const [a,b] = ['Guilherme', 'Veronica'];
console.log(a);
console.log(b);

const alunos = ['Guilherme', 'Glauber', 'Veronica'];
const [guilherme, glauber, veronica] = alunos;

console.log(guilherme);
console.log(glauber);
console.log(veronica);

const unidades = ['Penha', 'Tatuapé', 'Itaquera', 'São Miguel Paulista'];

const [penha,tatuape,,smp] = unidades;

console.log(penha);
console.log(tatuape);
console.log(smp);

const {nome, cidade} = {nome : 'Veronica', idade : 28, cidade : 'São Paulo'};

console.log(nome);
console.log(cidade);

const dados = {
    nome : 'Veronica',
    curso: 'JS',
    nascimento : '05/03/1994'
}

const {nome: aluno, curso} = dados;

console.log(aluno);
console.log(curso);