class Game {
  constructor(start) {
    this.stats = new Statistics();
    this.wallet = new Wallet(start);

    //Objects
    this.spin = document.querySelector('.spin');
    this.stake = document.querySelector('.stake');
    this.options = [...document.querySelectorAll('.option')];

    //Event on click
    this.spin.addEventListener('click', this.startGame.bind(this));

    //Spans
    this.moneySpan = document.querySelector('.money');
    this.gamesSpan = document.querySelector('.games');
    this.winsSpan = document.querySelector('.wins');
    this.loosesSpan = document.querySelector('.looses');
    this.resultSpan = document.querySelector('.result');

    this.render();
  }
  render(money = this.wallet.getWalletValue(), colors = ['lightgrey', 'lightgrey', 'lightgrey'], result = '', stats = [0, 0, 0]) {
    //Statistics
    this.moneySpan.textContent = money;
    this.gamesSpan.textContent = this.stats.showGameStatistics()[0];
    this.winsSpan.textContent = this.stats.showGameStatistics()[1];
    this.loosesSpan.textContent = this.stats.showGameStatistics()[2];

    this.options.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    });
  }
  startGame() {
    if (this.stake.value < 1) {
      this.stake.value = '';
      alert('too small number');
      return;
    }

    const bid = Math.floor(this.stake.value);

    if (!this.wallet.checkIfUserCanPlay(bid)) {
      this.stake.value = '';
      return alert('too low budget');
    }

    this.wallet.changeWalletValue(bid, '-');
    this.moneySpan.textContent = this.wallet.getWalletValue();

    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.checkIfWin(colors);
    const wonMoney = Result.moneyWon(win, bid);

    this.wallet.changeWalletValue(wonMoney, '+');
    this.stats.addGamesResults(win, bid);

    this.render(this.wallet.getWalletValue(), colors, win, this.stats.showGameStatistics, wonMoney);

    this.gamesSpan.textContent = this.stats.showGameStatistics()[0];
    this.winsSpan.textContent = this.stats.showGameStatistics()[1];
    this.loosesSpan.textContent = this.stats.showGameStatistics()[2];

    this.stake.value = '';
  }
}
