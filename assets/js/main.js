import { Player } from "./Player.js";

export function startGame() {
    let storedPlayers = localStorage.getItem('players');
    let players = storedPlayers ? JSON.parse(storedPlayers) : [];

    let name1 = document.getElementById('inputPlayer1').value;
    let name2 = document.getElementById('inputPlayer2').value;

    if (name1.trim().length < 1 && name2.trim().length < 1)
        return alert('Os jogadores não podem estar vazios.');
    if (name1 == name2)
        return alert('Não é possível 2 jogadores com o mesmo nome.');
    else if (name1.trim().length < 1)
        return alert('O jogador 1 não pode estar vazio.');
    else if (name2.trim().length < 1)
        return alert('O jogador 2 não pode estar vazio.');

    let player1 = new Player(name1);
    let player2 = new Player(name2);

    let player1AlreadyExists = players.find(player => player.name === name1);
    let player2AlreadyExists = players.find(player => player.name === name2);

    if (player1AlreadyExists) {
        let existingPlayer1 = new Player(player1AlreadyExists.name, player1AlreadyExists.matches, player1AlreadyExists.wins, player1AlreadyExists.draws, player1AlreadyExists.defeats);
        existingPlayer1.updateStatus('matches');
        players[players.indexOf(player1AlreadyExists)] = existingPlayer1;
    } else {
        player1.updateStatus('matches');
        players.push(player1);
    }
    if (player2AlreadyExists) {
        let existingPlayer2 = new Player(player2AlreadyExists.name, player2AlreadyExists.matches, player2AlreadyExists.wins, player2AlreadyExists.draws, player2AlreadyExists.defeats);
        existingPlayer2.updateStatus('matches');
        players[players.indexOf(player2AlreadyExists)] = existingPlayer2;
    } else {
        player2.updateStatus('matches');
        players.push(player2);
    }

    localStorage.setItem('players', JSON.stringify(players));

    location.href = './game.html';
}

window.startGame = startGame;