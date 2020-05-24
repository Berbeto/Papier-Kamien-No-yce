
const summaryGame = {
  gamesNumber: 0,
  playerWins: 0,
  aiWins: 0,
  drawsSum: 0
}

const handsPicks = {
  playerHand: 0,
  aiHand: 0
}

const handsCollection = document.querySelectorAll('img');

handsCollection.forEach(function (element){
  element.addEventListener('click', playerChose);
  console.log(element);
});

function playerChose() {
  handsCollection.forEach(hand => hand.style.border = '')
  this.style.border = '3px solid #f8b24f';
  handsPicks.playerHand = this.dataset.option;

  console.log(handsPicks.playerHand);
}

function aiChoise() {
  return handsPicks.aiHand = handsCollection[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, enemy) {
  if(
    player === 'papier' && enemy === 'kamień' || 
    player === 'kamień' && enemy === 'nożyczki' ||
    player === 'nożyczki' && enemy === 'papier'){
    return 'playerWin';
    
  } else if (player === enemy){ return 'draw';
  } else {return 'loss'}
}

const sButton = document.querySelector('.start').addEventListener('click', sGame);

function publishResult(pl, ai, res){

  document.querySelector(`[data-summary="your-choice"]`).textContent = pl;
  document.querySelector(`[data-summary="ai-choice"]`).textContent = ai;

  if(res === 'playerWin'){

    document.querySelector(`[data-summary="who-win"]`).textContent = 'Rozjebałeś synek';
    document.querySelector(`[data-summary="who-win"]`).style.color = 'green'
    document.querySelector('p.wins span').textContent = ++summaryGame.playerWins;

  } else if ( res === 'loss'){

    document.querySelector(`[data-summary="who-win"]`).textContent = 'Ale pizda z Ciebie';
    document.querySelector(`[data-summary="who-win"]`).style.color = 'red'
    document.querySelector('p.losses span').textContent = ++summaryGame.aiWins;

  } else {
    document.querySelector(`[data-summary="who-win"]`).textContent = 'No kurwa, graj!!!';
    document.querySelector(`[data-summary="who-win"]`).style.color = 'blue'
    document.querySelector('p.draws span').textContent = ++summaryGame.drawsSum;
  }
}

function resetResult(){
  document.querySelector(`[data-option = ${handsPicks.playerHand}`).style.border = '';

  handsPicks.playerHand = '';
  handsPicks.aiHand = '';
}

function sGame (){
  if(!handsPicks.playerHand){
    alert('wybierz coś ciulu');
    return;
  }

  document.querySelector('p.numbers span').textContent = ++summaryGame.gamesNumber
  handsPicks.aiHand = aiChoise();
  const gameResult = checkResult(handsPicks.playerHand, handsPicks.aiHand);
  console.log(gameResult);
  publishResult(handsPicks.playerHand, handsPicks.aiHand, gameResult);

  resetResult();
}



