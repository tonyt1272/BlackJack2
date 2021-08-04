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