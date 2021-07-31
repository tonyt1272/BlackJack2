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

function demo2(pause=500){

    // setTimeout(()=>{playerLCard1EL.classList.replace('hide','show')},1*pause)
    setTimeout(()=>{playerCCard1EL.classList.replace('hide','show')},1*pause)
    setTimeout(()=>{playerRCard1EL.classList.replace('hide','show')},2*pause)
    setTimeout(()=>{dealerCard1EL.classList.replace('hide','show')},3*pause)   
    // setTimeout(()=>{playerLCard2EL.classList.replace('hide','show')},5*pause)
    setTimeout(()=>{playerCCard2EL.classList.replace('hide','show')},4*pause)
    setTimeout(()=>{playerRCard2EL.classList.replace('hide','show')},5*pause)
    setTimeout(()=>{dealerCard2EL.classList.replace('hide','show')},6*pause)  
}

// function demo2(pause, positions){
//     i=1
//     for (position of positions){
//         setTimeout(()=>{document.getElementById(position).classList.replace('hide','show')}, i*pause)
//         i++
//     }
// }


fetchBankLevels().then(()=>{
    // console.log(bankLevels[playerCash])
    console.log(`Player Cash: $${playerCash}`)
    setPlayerBank(playerCash);

})



// ------------- dev script ---------------- //
deck = newDeck(); // master reference for cards
boot = new Boot(); // current boot of cards
boot.shuffle();

// PlayerL = new Player('L',5);
// PlayerC = new Player('C',10);
// PlayerR = new Player('R',5);
// players = [PlayerL, PlayerC, PlayerR];  // players active in a round

// dealer = new Dealer(players);



// dealer.deal();

function playGame(){
    try{
        dealer.clearTable();
        delete dealer;
    }catch (e){

    }
    PlayerL = new Player('L',5);
    PlayerC = new Player('C',10);
    PlayerR = new Player('R',5);
    players = [PlayerL, PlayerC, PlayerR];  // players active in a round
    // players = [PlayerC, PlayerR];  // players active in a round

    dealer = new Dealer(players);
    // boot.cards[0]=1;
    // boot.cards[1]=1;
    // boot.cards[2]=1;
    // boot.cards[3]=1;
    // boot.cards[4]=14;
    // boot.cards[5]=1;
    // boot.cards[6]=10;
    // boot.cards[7]=6;
    console.log(`Shuffle boot next round?: ${boot.dealt > boot.splitCard}`)
    dealer.deal()
    demo1()
    // demo2()
    if (dealer.handTotal[1] == 21){
        console.log('Dealer Has Blackjack!')
        dealer.currentPlayer = dealer.players[dealer.players.length-1]
        dealer.dealerPlay()
    }
    

}



// boot.cards[0]=1;
// boot.cards[1]=1;
// boot.cards[2]=1;
// boot.cards[3]=1;
// boot.cards[4]=10;
// boot.cards[5]=6;
// boot.cards[6]=10;
// boot.cards[7]=6;

// console.log('\n');
// console.log('PlayerL');
// console.log(`card file names: ${PlayerL.cards}`);
// console.log(`card face values: ${PlayerL.handValues}`);
// console.log(`hand total: ${PlayerL.handTotal}`);
// console.log('\n');
// console.log('PlayerC');
// console.log(`card file names: ${PlayerC.cards}`);
// console.log(`card face values: ${PlayerC.handValues}`);
// console.log(`hand total: ${PlayerC.handTotal}`);
// console.log('\n');
// console.log('PlayerR');
// console.log(`card file names: ${PlayerR.cards}`);
// console.log(`card face values: ${PlayerR.handValues}`);
// console.log(`hand total: ${PlayerR.handTotal}`);
// console.log('\n');
// console.log('Dealer');
// console.log(`card file names: ${dealer.cards}`);
// console.log(`card face values: ${dealer.handValues}`);
// console.log(`hand total: ${dealer.handTotal}`);
// console.log('\n');
