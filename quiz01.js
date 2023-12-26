function buyTollRoadCard(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 25) {
        console.log("Buying card");
        resolve({ tollRoadCard: true, balance: 0 });
        return;
      }
      reject(new Error("Not enough money to buy card"));
    }, 1000);
  });
}

function topUpBalance(card, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card) {
        console.log("Topping up balance");
        resolve({ ...card, balance: card.balance + amount });
        return;
      }
      reject(new Error("No card"));
    }, 1000);
  });
}

function useTollRoad(card) {
  const TOLL_PRICE = 10;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card.balance < TOLL_PRICE) {
        reject(new Error("Not enough balance"));
        return;
      }

      card.balance -= TOLL_PRICE;
      console.log("Using toll road");
      resolve();
    }, 1000);
  });
}

module.exports = { buyTollRoadCard, topUpBalance, useTollRoad };
