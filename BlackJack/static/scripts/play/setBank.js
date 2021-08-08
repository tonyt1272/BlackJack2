//http://192.168.1.185:5000/

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
        // await sendHttpRequest('GET', 'http://96.241.176.102:5000/api_bank_levels').then(responseData => {
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
        cashString = playerCash.toString();
        let bankUpdate;
        if (cashString.substr(cashString.length-2)== '.5'){
            bankUpdate = playerCash - 2.50;
            // console.log(bankUpdate)
        }else{
            bankUpdate = playerCash
            // console.log(bankUpdate)
        }
        levels = bankLevels[bankUpdate][1]
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
    let floatCash = parseFloat(playerCash).toFixed(2)
    playerBalance.innerHTML=`<p>$${floatCash}</p>`
}

function clearBets(){
    // document.getElementById('stand').removeChild(rebet);
    document.getElementById('deal-hit').removeChild(document.getElementById('dControl'));
    document.getElementById('dubD').removeChild(document.getElementById('cbControl'));
    
    let cleared_bet_total = 0;
    for(let letter of ['L', 'C','R']){
        for(let num of [1,2,3]){
            cleared_bet_total += bet_status[`${letter}B${num}`][1];  
        }
    }

    playerCash = playerCash + cleared_bet_total;
    setPlayerBank(playerCash);

    players = []
    bet_status = {LB1: [false,0], 
                    LB2: [false,0], 
                    LB3: [false,0], 
                    CB1: [false,0], 
                    CB2: [false,0], 
                    CB3: [false,0],
                    RB1: [false,0],
                    RB2: [false,0],
                    RB3: [false,0]}

    document.getElementById('playerC-bet1').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerC-bet2').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerC-bet3').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerL-bet1').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerL-bet2').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerL-bet3').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerR-bet1').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerR-bet2').setAttribute('src','static/chips/blankChip.png')
    document.getElementById('playerR-bet3').setAttribute('src','static/chips/blankChip.png')

}