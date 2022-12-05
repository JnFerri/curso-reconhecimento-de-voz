function vereficaSePossuiValorValido(chute){
   const numero = +chute
   if(verificaSeEUmNumero(numero)){
    descricaoNumero = 'Valor informado não é um numero'
    icone = '!'
   }
   if(numeroMaiorOuMenorQueoPermitido(numero)){
   descricaoNumero = 'Valor maior ou menor que o permitido'
   icone = '!'
   }
   if(numero === numeroSecreto){
      document.body.innerHTML = `<h2>Parabéns Você acertou !!</h2>
      <h3>O numero secreto era ${numeroSecreto}</h3>
      <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>`
   }
    }


function verificaSeEUmNumero(numero) {
   return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueoPermitido(numero){
   return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e=>{
  if( e.target.id == "jogarNovamente" ){
   window.location.reload()
  }
})