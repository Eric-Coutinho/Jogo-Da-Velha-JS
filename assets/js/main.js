import { Player } from "./Player.js";

let currentSymbol = 'X';
let board = Array(9).fill(null);

export function startGame() {
    let storedPlayers = localStorage.getItem('players');
    let players = storedPlayers ? JSON.parse(storedPlayers) : [];

    let name1 = document.getElementById('inputPlayer1').value;
    let name2 = document.getElementById('inputPlayer2').value;

    if (name1.trim().length < 1 || name2.trim().length < 1)
        return alert('Os jogadores não podem estar vazios.');
    if (name1 === name2)
        return alert('Não é possível 2 jogadores com o mesmo nome.');

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

export function choosePosition(cellId) {
    if (board[cellId - 1] !== null)
        return alert('Posição já ocupada. Escolha outra.');
    board[cellId - 1] = currentSymbol;
    document.getElementById(`cell-${cellId}`).innerHTML = `<img src="assets/Img/${currentSymbol}.png">`;

    let winner = CheckWinner()
    if (winner) {
        alert(`O jogador ${winner} venceu!!`)
        ResetGame()
    } else {
        currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
    }
}

export function CheckWinner() {
    const PadraoVitorias = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //linha
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //coluna
        [0, 4, 8], [2, 4, 6] //diagonal
    ]

    for (const Padrao of PadraoVitorias) {
        const [a, b, c] = Padrao
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
    return null
}

export function ResetGame() {
    if(confirm('Deseja mesmo reiniciar o jogo?')) {
        board.fill(null);
        document.querySelectorAll('.grid-cell').forEach(cell => cell.innerHTML = '');
        currentSymbol = 'X';
    }
    else
        return;
}


window.startGame = startGame;
window.choosePosition = choosePosition;
window.ResetGame = ResetGame;