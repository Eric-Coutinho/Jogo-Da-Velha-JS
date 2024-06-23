function startGame() {
    let player1 = document.getElementById('inputPlayer1').value;
    let player2 = document.getElementById('inputPlayer2').value;

    if (player1.trim().length < 1 && player2.trim().length < 1)
        return alert('Os jogadores não podem estar vazios.');
    else if (player1.trim().length < 1)
        return alert('O jogador 1 não pode estar vazio.');
    else if (player2.trim().length < 1)
        return alert('O jogador 2 não pode estar vazio.');

    location.href = './game.html'
}