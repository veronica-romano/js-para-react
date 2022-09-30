import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(error => console.log('Erro na operação: ' +error.message));


/* async function acessaAPI(){
    try {
       const resposta =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const dados = await resposta.json();
       console.log(dados);
    } catch (error) {
        console.log('Vixi, '+error.erro);
    }
} */
// a mesma função em arrow function
const acessaAPI = async() => {
    try {
       const resposta =  await fetch('https://jsonplaceholders.typicode.com/todos/1')
       const dados = await resposta.json();
       console.log(dados);
    } catch (error) {
        console.log('Vixi, '+error.erro);
    }
}

acessaAPI()