window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript
    console.log(e)
    if(chute < numeroSecreto){
        descricaoNumero = `O numero secreto é maior`
        icone = 'fa-up-long'
    }
    if(chute > numeroSecreto){
        descricaoNumero = `O numero secreto é menor`
        icone = 'fa-down-long'
    }
    vereficaSePossuiValorValido(chute)
    exibeChuteNaTela(chute,descricaoNumero,icone)
}


function exibeChuteNaTela(chute, descricaoNumero,icone){
    var numero = +chute
    const localChute = document.querySelector('#chute')
    localChute.innerHTML=`<div>Você disse:</div>
    <span class="box">${numero}</span>
    <div>${descricaoNumero} <i class="fa-solid ${icone}"></i></div>`
}

recognition.addEventListener('end', () => recognition.start())