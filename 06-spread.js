const bandas = ['Dommu Borgir', 'Batoushka', 'Mayhem', 'Cradle of Filth', 'Venom']
const outrasBandas = [bandas, 'Testament']
const maisBandas = [...bandas, 'Behemoth', 'Mercyful Fate']

console.log(outrasBandas)
console.log(maisBandas)

const dados = {
    nome : 'Veronica',
    idade : 23
};

const novosDados = {
    ...dados,
    cidade : 'São Paulo',
    estado : 'SP'
}

console.log(novosDados);