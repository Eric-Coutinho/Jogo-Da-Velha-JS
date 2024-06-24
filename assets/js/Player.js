export class Player {
    constructor(name, matches = 0, wins = 0, draws = 0, defeats = 0) {
        this.name = name;
        this.matches = matches;
        this.wins = wins;
        this.draws = draws;
        this.defeats = defeats;
    }

    updateStatus(status) {
        switch (status) {
            case 'matches':
                this.matches++;
                break;
            case 'win':
                this.wins++;
                break;
            case 'draw':
                this.draws++;
                break;
            case 'defeat':
                this.defeats++;
                break;
            default:
                alert('Não foi possível alterar os status do jogador.');
        }
    }
}