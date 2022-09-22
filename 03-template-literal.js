//concatenação (um pouco mais complicado)

const nome = 'veronica'
const sobrenome = 'silva'
const idade = 28
const cidade = 'São Paulo'
const estado = "SP"

let mensagem = "meu nome é " + nome + " " + sobrenome + ", tenho " + idade + " anos e sou de " + cidade + " - " + estado + " ."
console.log(mensagem)

// template literal

let mensagem2 = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e sou de ${cidade} - ${estado}. Sou ${idade >= 18 ? 'maior' : 'menor'} de idade.`
console.log(mensagem2)