const menorValor = 10;
const maiorValor = 100;

const numeroSecreto = gerarNumeroAleatorio();

    function gerarNumeroAleatorio() {
        return parseInt(Math.random () * maiorValor + 10)
    }

    console.log("número secreto: ", numeroSecreto);

    const elementoMenorValor = document.getElementById('menor-valor');
    elementoMenorValor.innerHTML = menorValor;

    const elementoMaiorValor = document.getElementById('maior-valor');
    elementoMaiorValor.innerHTML = maiorValor;