function carregarJogadoresDoLocalStorage() {
    let players = localStorage.getItem('players')

    if (players) {
        players = JSON.parse(players);
    }
    else {
        alert('Nao foi possivel encontrar jogadores');
    }
}

let players = carregarJogadoresDoLocalStorage();

function renderizarTabelaDeJogadores() {
    let tableBody = document.getElementById('ranking-body');
    tableBody.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        console.log(player)

        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        let winsCell = document.createElement('td');
        winsCell.textContent = player.wins;
        row.appendChild(winsCell);

        let defeatsCell = document.createElement('td');
        defeatsCell.textContent = player.defeats;
        row.appendChild(defeatsCell);

        let drawsCell = document.createElement('td');
        drawsCell.textContent = player.draws;
        row.appendChild(drawsCell);

        tableBody.appendChild(row);
    }

    window.onload = renderPlayersTable;
}