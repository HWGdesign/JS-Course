class Statistics {
  constructor() {
    this.gameResults = [];
  }
  addGamesResults(win, stake) {
    let gameResult = {
      win: win,
      stake: stake,
    };
    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    let gamesQuantity = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win).length;
    let looses = this.gameResults.filter((result) => !result.win).length;
    return [gamesQuantity, wins, looses];
  }
}

const stats = new Statistics();
