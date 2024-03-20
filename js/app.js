let quantidadeAlugada = 1;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao =  gameClicado.querySelector('.dashboard__item__button');
    

    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert('Obrigado por jogar, espero que tenha gostado!');
        quantidadeAlugada--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert('Faça bom proveito do seu jogo!');
        quantidadeAlugada++;
    }
    console.log(quantidadeAlugada);
}   