
function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
      elementoChute.innerHTML += '<div>Valor invalido</div>'
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
      elementoChute.innerHTML += `
     <div>valor inválido: Fale um número enter
      ${menorValor} e ${maiorValor}</div>
      `
    }

    if(numero === numeroSecreto){
      document.body.innerHTML= `
        <h2>Você Acertou!!!</h2>
        <h3> O número secreto era ${numeroSecreto}<h3/>
        
        <button id="jogar-novamente" class="btn-jogar">Reiniciar</button>
      `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
           <div>o número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></i></div>
        `
    }else{
      elementoChute.innerHTML += `
      <div>o número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></i></div>
   `
    }
       
}


function chuteForInvalido(numero){
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
  if(e.target.id == 'jogar-novamente'){
    window.location.reload()
  }

})

