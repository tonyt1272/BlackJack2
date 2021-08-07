//Dealer
const trayCard = document.getElementById('d-tray-card')
const dealerCard1EL = document.getElementById('d1')
const dealerCard2EL = document.getElementById('d2')
const dealerCard3EL = document.getElementById('d3')
const dealerCard4EL = document.getElementById('d4')
const dealerCard5EL = document.getElementById('d5')
const dealerCard6EL = document.getElementById('d6')
const dealerCard7EL = document.getElementById('d7')
const dealerCard8EL = document.getElementById('d8')

//Left Player
const playerLOutlineEL = document.getElementById('cL-outline')
const playerLCard1EL = document.getElementById('c1L')
const playerLCard1SplitEL = document.getElementById('c1L-split')
const playerLCard2EL = document.getElementById('c2L')
const playerLCard2SplitEL = document.getElementById('c2L-split')
const playerLCard3EL = document.getElementById('c3L')
const playerLCard3SplitEL = document.getElementById('c3L-split')
const playerLCard4EL = document.getElementById('c4L')
const playerLCard4SplitEL = document.getElementById('c4L-split')
const playerLCard5EL = document.getElementById('c5L')
const playerLCard5SplitEL = document.getElementById('c5L-split')
const playerLCard6EL = document.getElementById('c6L')
const playerLCard6SplitEL = document.getElementById('c6L-split')
const playerLCard7EL = document.getElementById('c7L')
const playerLCard7SplitEL = document.getElementById('c7L-split')
const playerLCard8EL = document.getElementById('c8L')
const playerLCard8SplitEL = document.getElementById('c8L-split')

const playerLbet1EL = document.getElementById('playerL-bet1')
const playerLbet2EL = document.getElementById('playerL-bet2')
const playerLbet3EL = document.getElementById('playerL-bet3')


//Center Player
const playerCOutlineEL = document.getElementById('cC-outline')
const playerCCard1EL = document.getElementById('c1C')
const playerCCard1SplitEL = document.getElementById('c1C-split')
const playerCCard2EL = document.getElementById('c2C')
const playerCCard2SplitEL = document.getElementById('c2C-split')
const playerCCard3EL = document.getElementById('c3C')
const playerCCard3SplitEL = document.getElementById('c3C-split')
const playerCCard4EL = document.getElementById('c4C')
const playerCCard4SplitEL = document.getElementById('c4C-split')
const playerCCard5EL = document.getElementById('c5C')
const playerCCard5SplitEL = document.getElementById('c5C-split')
const playerCCard6EL = document.getElementById('c6C')
const playerCCard6SplitEL = document.getElementById('c6C-split')
const playerCCard7EL = document.getElementById('c7C')
const playerCCard7SplitEL = document.getElementById('c7C-split')
const playerCCard8EL = document.getElementById('c8C')
const playerCCard8SplitEL = document.getElementById('c8C-split') 

const playerCbet1EL = document.getElementById('playerC-bet1')
const playerCbet2EL = document.getElementById('playerC-bet2')
const playerCbet3EL = document.getElementById('playerC-bet3')


//Right Player
const playerROutlineEL = document.getElementById('cR-outline')
const playerRCard1EL = document.getElementById('c1R')
const playerRCard1SplitEL = document.getElementById('c1R-split')
const playerRCard2EL = document.getElementById('c2R')
const playerRCard2SplitEL = document.getElementById('c2R-split')
const playerRCard3EL = document.getElementById('c3R')
const playerRCard3SplitEL = document.getElementById('c3R-split')
const playerRCard4EL = document.getElementById('c4R')
const playerRCard4SplitEL = document.getElementById('c4R-split')
const playerRCard5EL = document.getElementById('c5R')
const playerRCard5SplitEL = document.getElementById('c5R-split')
const playerRCard6EL = document.getElementById('c6R')
const playerRCard6SplitEL = document.getElementById('c6R-split')
const playerRCard7EL = document.getElementById('c7R')
const playerRCard7SplitEL = document.getElementById('c7R-split')
const playerRCard8EL = document.getElementById('c8R')
const playerRCard8SplitEL = document.getElementById('c8R-split')

const playerRbet1EL = document.getElementById('playerR-bet1')
const playerRbet2EL = document.getElementById('playerR-bet2')
const playerRbet3EL = document.getElementById('playerR-bet3')


//Player Bank
const playerBank6EL = document.getElementById('player-bank-6')
const playerBank5EL = document.getElementById('player-bank-5')
const playerBank4EL = document.getElementById('player-bank-4')
const playerBank3EL = document.getElementById('player-bank-3')
const playerBank2EL = document.getElementById('player-bank-2')
const playerBank1EL = document.getElementById('player-bank-1')
const playerBank0EL = document.getElementById('player-bank-0')
const playerBalance = document.getElementById('balance')


//Chip Elements
const chip5 = new Image()
chip5.src = "static/chips/five/fiveDrag.png"
const chip10 = new Image()
chip10.src = "static/chips/ten/tenDrag.png"
const chip25 = new Image()
chip25.src = "static/chips/twenty-five/twenty-fiveDrag.png"
const chip50 = new Image()
chip50.src = "static/chips/fifty/fiftyDrag.png"
const chip100 = new Image()
chip100.src = "static/chips/one-hundred/one-hundredDrag.png"
const chip500 = new Image()
chip500.src = "static/chips/five-hundred/five-hundredDrag.png"

//Play Buttons
const hitButton = document.createElement('button')
 hitButton.innerHTML=`<button id="hControl" type="button" class="btn btn-primary btn-sm" 
                      onclick="if(dealer.currentPlayer != dealer){dealer.currentPlayer.hit()};"> 
                      Hit </button>`

const dealButton = document.createElement('button')
dealButton.innerHTML = `<button id="dControl" type="button" class="btn btn-success btn-sm" 
                        onclick="playGame();">Deal</button>`
