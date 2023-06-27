class Result {
  static moneyWon(win, amount) {
    if (win) return amount * 3;
    else return 0;
  }
  static checkIfWin(draw) {
    if ((draw[0] === draw[1] && draw[1] === draw[2]) || (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])) return true;
    else return false;
  }
}

Result.moneyWon();
