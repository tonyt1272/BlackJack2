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


function demo1(pause=500, players){
    // FIX THIS!!!
    // Needs to be moved into dealer.deal() and refactored to render cards only for
    // active players.
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


// ------------- dev script ---------------- //
deck = newDeck(); // master reference for cards
boot = new Boot(); // current boot of cards

boot.shuffle();


function playGame(){
   
    dealer = new Dealer(players);
    // boot.cards[0]=1;
    // boot.cards[1]=1;
    // boot.cards[2]=1;
    // boot.cards[3]=1;
    // boot.cards[4]=1;
    // boot.cards[5]=10;
    // boot.cards[6]=10;
    // boot.cards[7]=10;
    // boot.cards[8]=10;
    console.log(`Shuffle boot next round?: ${boot.dealt > boot.splitCard}`)
    dealer.deal()
    demo1()
    
    if (dealer.handTotal[1] == 21){
        console.log('Dealer Has Blackjack!')
        dealer.currentPlayer = dealer.players[dealer.players.length-1]
        dealer.dealerPlay()
    
    }
    
}

