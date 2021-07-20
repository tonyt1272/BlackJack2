playerCbet2EL.addEventListener("dragover", ev => {
    ev.preventDefault();
    // let data = ev.dataTransfer.getData("text/plain", ev.target.id);
    // console.log(data)
    playerCbet2EL.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`)
    playerCbet2EL.classList.replace('hide','show'); 
});

function setChip(drag_bet){
    const promise = new Promise((resolve, reject) =>{
        playerCbet2EL.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`)
        resolve('success');
    })
    return promise;
}

async function setBet(drag_bet){
    await setChip(drag_bet).then(responseData =>{
        playerCbet2EL.classList.replace('hide','show');
    })
}

setBet(drag_bet)