function centerWindow(){
    // window.scrollTo(0,document.body.scrollHeight);
    setTimeout(()=>{
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          })
    },500) 
}


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


fetchBankLevels().then(()=>{
    // console.log(bankLevels[playerCash])
    console.log(`Player Cash: $${playerCash}`)
    setPlayerBank(playerCash);

})

let stack = 0;
