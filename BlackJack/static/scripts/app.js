//Dealer
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


// --------------Start Bet Event Listeners
let drag_bet;

playerBank0EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip5, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet = 'five';
});

playerBank1EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip10, 34, 31);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet = 'ten';
});

playerBank2EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip25, 34, 31);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet = 'twenty-five';
});

playerBank3EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip50, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet = 'fifty';
});

playerBank4EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip100, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet = 'one-hundred';
});

playerBank5EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip500, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet = 'five-hundred';
});

playerBank6EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip500, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet = 'five-hundred';
});

function convertDrag(drag_bet){
    if (drag_bet=='five'){
        return 5
    }
    if (drag_bet=='ten'){
        return 10
    }
    if (drag_bet=='twenty-five'){
        return 25
    }
    if (drag_bet=='fifty'){
        return 50
    }
    if (drag_bet=='one-hundred'){
        return 100
    }
    if (drag_bet=='five-hundred'){
        return 500
    }
}


function setChip(drag_bet,bet_pos){
    const promise = new Promise((resolve, reject) =>{
        //
        // logic based on drag_bet amount and chip amounts at bet_pos //
        //
        // bet_pos : the element where the chip is to be dropped
        // drag_bet: the chip amount of the dragged chip
        
        const betPosition2 = bet_pos.id.slice(6,7)+'B2';
        const betPosition1 = bet_pos.id.slice(6,7)+'B1';
        const betPosition3 = bet_pos.id.slice(6,7)+'B3';
        const betAmount = drag_bet;

        //logging status before bet
        console.log(`chip moved to box : ${betAmount}`);
        console.log(`box bet placed in: ${betPosition2}`);
        console.log(`previous bet status:  ${bet_status[betPosition2][0]}`);
        console.log(`privious bet amount 1:  ${bet_status[betPosition1][1]}`);
        console.log(`privious bet amount 2:  ${bet_status[betPosition2][1]}`);
        console.log(`privious bet amount 3:  ${bet_status[betPosition3][1]}`);
        //
        
        //place bet and update bet chips image
        const amount = convertDrag(drag_bet);
        if (bet_status[betPosition2][1]==0){
            bet_pos.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`);
            bet_status[betPosition2][0] = true;
            bet_status[betPosition2][1] += amount;
            setPlayerBank(drag_bet)
        } else if (bet_status[betPosition2][1] > 0 && bet_status[betPosition2][1] < 6*amount){
            const numChips = (bet_status[betPosition2][1]/amount) + 1;
            bet_status[betPosition2][1] += amount;
            bet_pos.setAttribute('src',`static/chips/${drag_bet}/${numChips}x${drag_bet}.png`);
            setPlayerBank(drag_bet)
        }

        
        //logging status after bet
        console.log(`current bet status:  ${bet_status[betPosition2][0]}`)
        console.log(`current bet amount 1:  ${bet_status[betPosition1][1]}`)
        console.log(`current bet amount 2:  ${bet_status[betPosition2][1]}`)
        console.log(`current bet amount 3:  ${bet_status[betPosition3][1]}`)

        resolve('success');
    })
    
    return promise;

}
async function setBet(drag_bet,bet_pos){
    await setChip(drag_bet,bet_pos).then(responseData =>{
        bet_pos.classList.replace('hide','show');
    })
}

let bet_status = {LB1: [false,0], 
                  LB2: [false,0], 
                  LB3: [false,0], 
                  CB1: [false,0], 
                  CB2: [false,0], 
                  CB3: [false,0],
                  RB1: [false,0],
                  RB2: [false,0],
                  RB3: [false,0]}

// --------------Center Bet 
// position 2
playerCbet2EL.addEventListener("dragover", ev => {
    ev.preventDefault();
    playerCOutlineEL.classList.add('droppable')
});

playerCbet2EL.addEventListener("dragleave", ev => {
    ev.preventDefault();
    if (!bet_status.CB2[0]){
        playerCbet2EL.classList.replace('show','hide');
        // playerCbet2EL.classList.toggle('hide');

    }
    playerCOutlineEL.classList.remove('droppable')
});

playerCbet2EL.addEventListener("drop", ev => {
    ev.preventDefault();
    setBet(drag_bet, playerCbet2EL)
    playerCOutlineEL.classList.remove('droppable')
    // setPlayerBank(drag_bet)
});


// ----------------Left Bet
// position 2
playerLbet2EL.addEventListener("dragover", ev => {
    ev.preventDefault();
    playerLOutlineEL.classList.add('droppable')
});

playerLbet2EL.addEventListener("dragleave", ev => {
    ev.preventDefault();
    if (!bet_status.LB2[0]){
        playerLbet2EL.classList.replace('show','hide');
    }
    playerLOutlineEL.classList.remove('droppable')
});

playerLbet2EL.addEventListener("drop", ev => {
    ev.preventDefault();
    setBet(drag_bet,playerLbet2EL)
    playerLOutlineEL.classList.remove('droppable')

});


// ----------------Right Bet
// position 2
playerRbet2EL.addEventListener("dragover", ev => {
    ev.preventDefault();
    playerROutlineEL.classList.add('droppable')
});

playerRbet2EL.addEventListener("dragleave", ev => {
    ev.preventDefault();
    if (!bet_status.RB2[0]){
        playerRbet2EL.classList.replace('show','hide');
    }
    playerROutlineEL.classList.remove('droppable')
});

playerRbet2EL.addEventListener("drop", ev => {
    ev.preventDefault();
    setBet(drag_bet,playerRbet2EL)
    playerROutlineEL.classList.remove('droppable')

});


const bankPos = [[playerBank0EL,0,'five'],
                [playerBank1EL,1,'ten'],
                [playerBank2EL,2,'twenty-five'],
                [playerBank3EL,3,'fifty'],
                [playerBank4EL,4,'one-hundred'],
                [playerBank5EL,5,'five-hundred'],
                [playerBank6EL,6,'five-hundred']]
let bankLevels;
let playerCash = 7140;

function sendHttpRequest(method,url){
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';  //pre-configure so JSON.parse() is not required below
        xhr.onload = function() {
            resolve(xhr.response);
        }
        xhr.send();
    });
    return promise;
}

async function fetchBankLevels() {
    await sendHttpRequest('GET', 'http://localhost:5000/api_bank_levels').then(responseData => {
        bankLevels = responseData;
    })
}

function setPlayerBank(drag_bet){
    if (drag_bet === 'five'){
        playerCash -= 5
    }
    if (drag_bet === 'ten'){
        playerCash -= 10
    }
    if (drag_bet === 'twenty-five'){
        playerCash -= 25
    }
    if (drag_bet === 'fifty'){
        playerCash -= 50
    }
    if (drag_bet === 'one-hundred'){
        playerCash -= 100
    }
    if (drag_bet === 'five-hundred'){
        playerCash -= 500
    }
    if (playerCash <= 7140){
        levels = bankLevels[playerCash][1]
    }else{
        levels = [6,6,6,6,6,6,6]}

    for (pos of bankPos){
        if (levels[pos[1]]>0){
            pos[0].classList.replace('hide','show')
            pos[0].setAttribute('src',`static/chips/${pos[2]}/${levels[pos[1]]}x${pos[2]}.png`)
        }else{
            if(String(pos[0].classList) == 'show'){
                pos[0].classList.replace('show','hide')
            }   
        }       
    }
    drag_bet = null;
    
}


function centerWindow(){
    // window.scrollTo(0,document.body.scrollHeight);
    setTimeout(()=>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          })
    },1000)
    
}

window.addEventListener('load', (event) => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        // behavior: 'smooth'
      })
    // console.log('The page has fully loaded');
});

fetchBankLevels().then(()=>{
    // console.log(bankLevels[playerCash])
    setPlayerBank(playerCash)
    
})

// document.addEventListener('scroll',centerWindow)






