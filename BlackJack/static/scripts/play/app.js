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


function gameStart(players){
    let pause = 500
    // Maybe move into dealer.deal()?
    // active players.
    let cardIds = ['c1L', 'c1C', 'c1R', 'd1', 'c2L', 'c2C', 'c2R', 'd2']
    let presentSeats = [];
    for (const player of players){
        presentSeats.push(player.position)
    }
    // console.log(presentSeats)
    let dealToIds = [];
    for (const id of cardIds){
        if(presentSeats.includes(id[id.length-1]) || id[0] == 'd'){
            dealToIds.push(id)
        }
    }
    // console.log(dealToIds)
    for (const id of dealToIds){
        setTimeout(()=>{
            document.getElementById(id).classList.replace('hide','show')
        }, pause)
        pause += 500
    } 
}


fetchBankLevels().then(()=>{
    console.log(`Player Cash: $${playerCash}`)
    setPlayerBank(playerCash);
})
//serving boot from server api, this allows order and value of cards dealt to be verified against
//served values to detect manipulation.  Could serve cards one at a time if required but I don't 
//think it's necessary for this learning tool game.
fetchBoot().then(()=>{boot = new Boot()});

// ------------- dev script ---------------- //
deck = newDeck(); // master reference for cards
// boot = new Boot(); // current boot of cards

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
    
    console.log(`Shuffle boot next round?: ${boot.dealt > boot.splitCard}`)
    dealer.deal()
    gameStart(players)
    
    if (dealer.handTotal[1] == 21){
        console.log('Dealer Has Blackjack!')
        dealer.currentPlayer = dealer.players[dealer.players.length-1]
        dealer.dealerPlay()
    
    }
    
}

