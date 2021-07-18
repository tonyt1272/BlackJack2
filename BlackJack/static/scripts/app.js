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


let bankLevels;
let playerCash = 2100;

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

function setPlayerBank(playerCash){
    if (playerCash <= 7140){
        levels = bankLevels[playerCash][1]
    }else{
        levels = [6,6,6,6,6,6,6]
    }
    
    const bankPos = [[playerBank0EL,0,'five'],
                     [playerBank1EL,1,'ten'],
                     [playerBank2EL,2,'twenty-five'],
                     [playerBank3EL,3,'fifty'],
                     [playerBank4EL,4,'one-hundred'],
                     [playerBank5EL,5,'five-hundred'],
                     [playerBank6EL,6,'five-hundred']]
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
        left: 0
        // behavior: 'smooth'
      })
    // console.log('The page has fully loaded');
});

fetchBankLevels().then(()=>{
    console.log(bankLevels[playerCash])
    setPlayerBank(playerCash)
    
})

document.addEventListener('scroll',centerWindow)





