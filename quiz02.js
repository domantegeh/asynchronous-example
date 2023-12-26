const { buyTollRoadCard, topUpBalance, useTollRoad } = require("./quiz01.js");

async function getTollAccess() {
  try {
    const card = await buyTollRoadCard(25);
    const updatedCard = await topUpBalance(card, 10);
    await useTollRoad(updatedCard);
  } catch (error) {
    console.log(error.message);
  }
}

getTollAccess();
