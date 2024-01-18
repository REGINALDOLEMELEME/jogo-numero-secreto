let listaNumerosSorteados = [];
let quantidadeNumerosAleatorios = 10;
let numeroSecreto = gerarNumeroAleatorio(quantidadeNumerosAleatorios);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});

}

function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';

}

function mensagemInicial() {

    exibirTextoNaTela('h1', "Jogo do número secreto");
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${quantidadeNumerosAleatorios}`);

}

function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        tentativaPalavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${tentativaPalavra}!`;
        exibirTextoNaTela('h1', 'Parabéns você acertou!!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        limparCampo();

        if (chute > numeroSecreto) {

            exibirTextoNaTela('p', 'numero Secreto é menor que o informado');

        } else {

            exibirTextoNaTela('p', 'numero Secreto é maior que o informado');

        }

    }

    tentativas++;

}

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * quantidadeNumerosAleatorios + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == quantidadeNumerosAleatorios){

        listaNumerosSorteados = [];

    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {

        return gerarNumeroAleatorio();

    } else {

        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;

    }

    ;


}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

mensagemInicial();