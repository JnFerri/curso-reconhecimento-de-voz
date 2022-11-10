const menorValor = 1
const maiorValor = 100

const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio(){
return parseInt(Math.random() * maiorValor + 1)
}

const localMenorValor = document.querySelector('#menor-valor')
const localMaiorValor = document.querySelector('#maior-valor')

localMenorValor.innerText = menorValor
localMaiorValor.innerText = maiorValor