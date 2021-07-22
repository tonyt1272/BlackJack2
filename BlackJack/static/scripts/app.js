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

//Strange Bet Configs
const StrangeBetConfigs = {45: [20, 25, 0],
                           50: [0, 50, 0],
                           55: [5, 50, 0],
                           60: [10, 50, 0],
                           65: [5, 50, 10],
                           70: [20, 50, 0],
                           75: [0, 75, 0],
                           80: [0, 75, 5],
                           85: [30, 50, 5],
                           90: [40, 50, 0],
                           95: [50, 40, 5],
                           100: [0, 100, 0],
                           105: [5, 100, 0],
                           110: [10, 100, 0],
                           115: [15, 100, 0],
                           120: [20, 100, 0],
                           125: [25, 100, 0],
                           130: [25, 100, 5],
                           135: [25, 100, 10],
                           140: [25, 100, 15],
                           145: [25, 100, 20],
                           150: [50, 100, 0],
                           155: [50, 100, 5],
                           160: [50, 100, 10],
                           165: [50, 100, 15],
                           170: [50, 100, 20],
                           175: [75, 100, 0],
                           180: [75, 100, 5],
                           185: [75, 100, 10],
                           190: [75, 100, 15],
                           195: [75, 100, 20],
                           200: [0, 200, 0],
                           205: [5, 200, 0],
                           210: [10, 200,  0],
                           215: [15, 200,  0],
                           220: [20, 200,  0],
                           225: [25, 200,  0],
                           230: [25, 200,  5],
                           235: [25, 200,  10],
                           240: [25, 200,  15],
                           245: [25, 200,  20],
                           250: [50, 200,  0],
                           255: [50, 200,  5],
                           260: [50, 200,  10],
                           265: [50, 200,  15],
                           270: [50, 200,  20],
                           275: [75, 200,  0],
                           280: [75, 200,  5],
                           285: [75, 200,  10],
                           290: [75, 200,  15],
                           295: [75, 200,  20],
                           300: [0, 300, 0],
                           305: [5, 300, 0],
                           310: [10, 300, 0],
                           315: [15, 300, 0],
                           320: [20, 300, 0],
                           325: [25, 300, 0],
                           330: [25, 300, 5],
                           335: [25, 300, 10],
                           340: [25, 300, 15],
                           345: [25, 300, 20],
                           350: [50, 300, 0],
                           355: [50, 300, 5],
                           360: [50, 300, 10],
                           365: [50, 300, 15],
                           370: [50, 300, 20],
                           375: [75, 300, 0],
                           380: [75, 300, 5],
                           385: [75, 300, 10],
                           390: [75, 300, 15],
                           395: [75, 300, 20],
                           400: [0, 400, 0],
                           405: [5, 400, 0],
                           410: [10, 400, 0],
                           415: [15, 400, 0],
                           420: [20, 400, 0],
                           425: [25, 400, 0],
                           430: [25, 400, 5],
                           435: [25, 400, 10],
                           440: [25, 400, 15],
                           445: [25, 400, 20],
                           450: [50, 400, 0],
                           455: [50, 400, 5],
                           460: [50, 400, 10],
                           465: [50, 400, 15],
                           470: [50, 400, 20],
                           475: [75, 400, 0],
                           480: [75, 400, 5],
                           485: [75, 400, 10],
                           490: [75, 400, 15],
                           495: [75, 400, 20],
                           500: [0, 500, 0],
                        }

function convertBetConfig(betConfig){
    let finalConfig = [];
    const chipVals =[[500, 'five-hundred'], [100, 'one-hundred'], [50, 'fifty'], 
                     [25, 'twenty-five'], [10, 'ten'], [5, 'five']]
    for(pos of betConfig){
        for(val of chipVals){
            if(pos%val[0] == 0){
                num = pos/val[0]
                const pair = [val[1], num]
                finalConfig.push(pair)
                break
            }
        }
    }
    return finalConfig
}

// --------------Start Bet Event Listeners
let drag_bet_g;

playerBank0EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip5, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'copyMove';
    drag_bet_g = 'five';
});

playerBank1EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip10, 34, 31);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'ten';
});

playerBank2EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip25, 34, 31);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'twenty-five';
});

playerBank3EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip50, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'fifty';
});

playerBank4EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip100, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'one-hundred';
});

playerBank5EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip500, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'five-hundred';
});

playerBank6EL.addEventListener("dragstart", ev =>{
   ev.dataTransfer.setDragImage(chip500, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'five-hundred';
});

function convertDrag(bet){
    if (bet=='five'){
        return 5
    }
    if (bet=='ten'){
        return 10
    }
    if (bet=='twenty-five'){
        return 25
    }
    if (bet=='fifty'){
        return 50
    }
    if (bet=='one-hundred'){
        return 100
    }
    if (bet=='five-hundred'){
        return 500
    }
}

function setChip(drag_bet,bet_pos){
    const promise = new Promise((resolve, reject) =>{
        // bet_pos :HTML Element where the chip is to be dropped
        // drag_bet:Chip amount of the dragged chip, string 'five', 'ten', etc.
        const betPosition2 = bet_pos.id.slice(6,7)+'B2';
        const betPosition1 = bet_pos.id.slice(6,7)+'B1';
        const betPosition3 = bet_pos.id.slice(6,7)+'B3';
        const betAmount = drag_bet;
        const outline = document.getElementById('c'+bet_pos.id.slice(6,7)+'-outline');
        
        const id1 = bet_pos.id.slice(0,7)+'-bet1'
        const id3 = bet_pos.id.slice(0,7)+'-bet3'
        const bet_pos1 = document.getElementById(id1)
        const bet_pos3 = document.getElementById(id3)

        //logging status before bet
        console.log(`chip moved: ${betAmount}`);
        console.log(`box bet placed in: ${betPosition2}`);
        // console.log(`previous bet status:  ${bet_status[betPosition2][0]}`);
        console.log(`previous bet amount 1:  ${bet_status[betPosition1][1]}`);
        console.log(`previous bet amount 2:  ${bet_status[betPosition2][1]}`);
        console.log(`previous bet amount 3:  ${bet_status[betPosition3][1]}`);
        const amount = convertDrag(drag_bet);
        const newBetTotal = bet_status[betPosition1][1] + bet_status[betPosition2][1]
                          + bet_status[betPosition3][1] + amount
        console.log(`Desired Bet Total: ${newBetTotal}`)                  
        //
        if (newBetTotal <= 500){
        //place bet and update bet chips image
        
            if (bet_status[betPosition2][1]==0){
                bet_pos.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`);
                bet_status[betPosition2][0] = drag_bet;
                bet_status[betPosition2][1] += amount;
                setPlayerBank(drag_bet)
            } else if (bet_status[betPosition2][0] == drag_bet && bet_status[betPosition2][1] < 6*amount){
                const numChips = (bet_status[betPosition2][1]/amount) + 1;
                bet_status[betPosition2][1] += amount;
                bet_pos.setAttribute('src',`static/chips/${drag_bet}/${numChips}x${drag_bet}.png`);
                setPlayerBank(drag_bet)
            } else if(bet_status[betPosition1][1]==0){
                bet_pos1.classList.replace('hide','show')
                bet_pos1.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`);
                bet_status[betPosition1][0] = drag_bet;
                bet_status[betPosition1][1] += amount;
                setPlayerBank(drag_bet)

                // add event listeners for position 1
                // bet_pos1.addEventListener("dragover", ev => {
                //     ev.preventDefault();
                //     outline.classList.add('droppable')
                // });
                // bet_pos1.addEventListener("dragleave", ev => {
                //     ev.preventDefault();
                //     outline.classList.remove('droppable')
                // });
                // bet_pos1.addEventListener("drop", ev => {
                //     ev.preventDefault();
                //     setBet(drag_bet_g, bet_pos1)
                //     outline.classList.remove('droppable')
                // });
                //

            }  else if (bet_status[betPosition1][0] == drag_bet && bet_status[betPosition1][1] < 6*amount){
                const numChips = (bet_status[betPosition1][1]/amount) + 1;
                bet_status[betPosition1][1] += amount;
                bet_pos1.setAttribute('src',`static/chips/${drag_bet}/${numChips}x${drag_bet}.png`);
                setPlayerBank(drag_bet)
            } else if(bet_status[betPosition3][1]==0){
                bet_pos3.classList.replace('hide','show')
                bet_pos3.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`);
                bet_status[betPosition3][0] = drag_bet;
                bet_status[betPosition3][1] += amount;
                setPlayerBank(drag_bet)

            //add event listeners for position 3
            // bet_pos3.addEventListener("dragover", ev => {
            //     ev.preventDefault();
            //     outline.classList.add('droppable')
            // });
            // bet_pos3.addEventListener("dragleave", ev => {
            //     ev.preventDefault();
            //     outline.classList.remove('droppable')
            // });
            // bet_pos3.addEventListener("drop", ev => {
            //     ev.preventDefault();
            //     setBet(drag_bet_g, bet_pos3)
            //     outline.classList.remove('droppable')
            // });
            //

            } else if (bet_status[betPosition3][0] == drag_bet && bet_status[betPosition3][1] < 6*amount){
                const numChips = (bet_status[betPosition3][1]/amount) + 1;
                bet_status[betPosition3][1] += amount;
                bet_pos3.setAttribute('src',`static/chips/${drag_bet}/${numChips}x${drag_bet}.png`);
                setPlayerBank(drag_bet)
            }
            else{console.log('Strange Bet!');
                 const betConfig = StrangeBetConfigs[newBetTotal]
                 console.log(`Config for Strange Bet: ${betConfig}`)
                 const finalBetConfig = convertBetConfig(betConfig)
                 console.log(`final Strange Bet Config: ${finalBetConfig}`)
                 for(item of finalBetConfig){
                     console.log(item)
                 }
                 bet_status[betPosition1][0] = finalBetConfig[0][0]
                 bet_status[betPosition1][1] = betConfig[0]
                 bet_status[betPosition2][0] = finalBetConfig[1][0]
                 bet_status[betPosition2][1] = betConfig[1]
                 bet_status[betPosition3][0] = finalBetConfig[2][0]
                 bet_status[betPosition3][1] = betConfig[2]
                 
                 if(finalBetConfig[0][1] > 0){
                    bet_pos1.classList.replace('hide','show')
                    bet_pos1.setAttribute('src',`static/chips/${finalBetConfig[0][0]}/${finalBetConfig[0][1]}x${finalBetConfig[0][0]}.png`)}
                 else{
                    bet_pos1.classList.replace('show','hide')
                    bet_pos1.setAttribute('src',`static/chips/blankChip.png`)
                 }

                if(finalBetConfig[1][1] > 0){
                    bet_pos.classList.replace('hide','show')
                    bet_pos.setAttribute('src',`static/chips/${finalBetConfig[1][0]}/${finalBetConfig[1][1]}x${finalBetConfig[1][0]}.png`)}
                else{
                    bet_pos.classList.replace('show','hide')
                    bet_pos.setAttribute('src',`static/chips/blankChip.png`)
                }
                 
                if(finalBetConfig[2][1] > 0){
                    bet_pos3.classList.replace('hide','show')
                    bet_pos3.setAttribute('src',`static/chips/${finalBetConfig[2][0]}/${finalBetConfig[2][1]}x${finalBetConfig[2][0]}.png`)}
                else{
                    bet_pos3.classList.replace('show','hide')
                    bet_pos3.setAttribute('src',`static/chips/blankChip.png`)
                }
                 
                setPlayerBank(drag_bet)
                }
     
        
        }else{
            console.log('Max Bet exceeded!')
            var audio = new Audio('static/audio/short_bark.wav');
            audio.play()
            // $('.alert').alert("Table limit is $500")
            // $('#exampleModal').modal('show');
            // centerWindow();
        }
        //logging status after bet
        // console.log(`current bet status:  ${bet_status[betPosition2][0]}`)
        console.log(`current bet amount 1:  ${bet_status[betPosition1][1]}`)
        console.log(`current bet amount 2:  ${bet_status[betPosition2][1]}`)
        console.log(`current bet amount 3:  ${bet_status[betPosition3][1]}`)
        console.log('\n')
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
    }
    playerCOutlineEL.classList.remove('droppable')
});

playerCbet2EL.addEventListener("drop", ev => {
    ev.preventDefault();
    setBet(drag_bet_g, playerCbet2EL)
    playerCOutlineEL.classList.remove('droppable')
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
    setBet(drag_bet_g,playerLbet2EL)
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
    setBet(drag_bet_g,playerRbet2EL)
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
let playerCash = 2500;

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
            pos[0].setAttribute('draggable',true)
            pos[0].classList.add('movable') 
        }else{
            pos[0].setAttribute('src',`static/chips/blankChip.png`)
            pos[0].setAttribute('draggable',false)
            pos[0].classList.remove('movable') 
            if(String(pos[0].classList) == 'show'){
                pos[0].classList.replace('show','hide')
            }   
        }       
    }
    drag_bet = null;  
}


function centerWindow(){
    // window.scrollTo(0,document.body.scrollHeight);

    // window.scrollTo({
    //     top: document.body.scrollHeight,
    //     left: 0,
    //     behavior: 'smooth'
    //   })
    setTimeout(()=>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          })
    },500)
    
}

window.addEventListener('load', (event) => {

    // playerBank3EL.scrollIntoView(false)
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 125,
        behavior: 'smooth'
      })
    // console.log('The page has fully loaded');
    // demo1();

});

fetchBankLevels().then(()=>{
    // console.log(bankLevels[playerCash])
    setPlayerBank(playerCash)
})

// document.addEventListener('scroll',centerWindow)


function demo1(pause=500){
    
    setTimeout(()=>{playerLCard1EL.classList.replace('hide','show')},1*pause)
    setTimeout(()=>{playerCCard1EL.classList.replace('hide','show')},2*pause)
    setTimeout(()=>{playerRCard1EL.classList.replace('hide','show')},3*pause)
    setTimeout(()=>{dealerCard1EL.classList.replace('hide','show')},4*pause)   
    setTimeout(()=>{playerLCard2EL.classList.replace('hide','show')},5*pause)
    setTimeout(()=>{playerCCard2EL.classList.replace('hide','show')},6*pause)
    setTimeout(()=>{playerRCard2EL.classList.replace('hide','show')},7*pause)
    setTimeout(()=>{dealerCard2EL.classList.replace('hide','show')},8*pause)  
}


    
   







