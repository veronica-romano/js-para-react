class Pessoa {
    //propriedades
    nome = 'seu nome';
    genero = 'não informado';
    idade;

    //métodos
    mostraGenero(){
        console.log(`Gênero: ${this.genero}`);
    }

    mostraNome(){
        console.log(`Nome: ${this.nome}`);
    }

    mostraIdade(){
        console.log(`Idade: ${this.idade}`);
    }

    verificaIdade(){
        return this.idade >= 18 ? 'maior de idade' : 'menor de idade'
    }
}

class Aluno extends Pessoa{
    matricula;
    curso;

    //métodos
    mostraDados(){
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Idade: ${this.idade}`);
        this.mostraNome();
        this.mostraGenero();
        this.mostraIdade();
       
    }
}
/* Criando objetos ou instâncias de Pessoa*/

let umaPessoa = new Pessoa;
umaPessoa.nome = 'Veronica';
umaPessoa.genero = 'Neutre';
umaPessoa.idade = 28

console.log(umaPessoa);

let outraPessoa = new Pessoa;
outraPessoa.nome = 'Pepita';
outraPessoa.genero = 'trainx';
outraPessoa.idade = 40

console.log(outraPessoa);

/* Criando objetos ou instâncias de Aluno*/

let umAluno = new Aluno;
console.log(umAluno);
/* 
Aluno {
  nome: 'seu nome',
  genero: 'não informado',
  matricula: undefined,
  curso: undefined
} */

let outroAluno = new Aluno;
outroAluno.nome = 'Veronica'
outroAluno.genero = 'feminino'
outroAluno.matricula = '666hail'
outroAluno.curso = 'JS para React'
outroAluno.idade = 28
console.log(outroAluno);
outroAluno.mostraDados();
console.log(outroAluno.verificaIdade());