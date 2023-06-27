class Wallet {
  constructor(money) {
    let _money = money;
    //money value
    this.getWalletValue = () => _money;

    //check if user can play
    this.checkIfUserCanPlay = (value) => {
      if (_money >= value) return true;
      return false;
    };

    //change wallet value
    this.changeWalletValue = (value, type = '+') => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return (_money += value);
        } else if (type === '-') {
          return (_money -= value);
        } else {
          throw new Error('Invalid type...');
        }
      } else {
        throw new Error('Invalid value...');
      }
    };
  }
}
const wallet = new Wallet();

// console.log(wallet.getWalletValue());
// console.log(wallet.checkIfUserCanPlay(201));
