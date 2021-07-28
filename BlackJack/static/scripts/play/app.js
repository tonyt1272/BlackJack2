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

// ------------- dev script ---------------- //
deck = newDeck(); // master reference for cards
boot = new Boot(); // current boot of cards
boot.shuffle();

PlayerL = new Player('L',5);
PlayerC = new Player('C',10);
PlayerR = new Player('R',5);
players = [PlayerL, PlayerC, PlayerR];  // players active in a round

dealer = new Dealer(players);

// boot.cards[0]=1;
// boot.cards[1]=1;
// boot.cards[2]=1;
// boot.cards[3]=1;
// boot.cards[4]=10;
// boot.cards[5]=6;
// boot.cards[6]=10;
// boot.cards[7]=6;

dealer.deal();


console.log('\n');
console.log('PlayerL');
console.log(`card file names: ${PlayerL.cards}`);
console.log(`card face values: ${PlayerL.handValues}`);
console.log(`hand total: ${PlayerL.handTotal}`);
console.log('\n');
console.log('PlayerC');
console.log(`card file names: ${PlayerC.cards}`);
console.log(`card face values: ${PlayerC.handValues}`);
console.log(`hand total: ${PlayerC.handTotal}`);
console.log('\n');
console.log('PlayerR');
console.log(`card file names: ${PlayerR.cards}`);
console.log(`card face values: ${PlayerR.handValues}`);
console.log(`hand total: ${PlayerR.handTotal}`);
console.log('\n');
console.log('Dealer');
console.log(`card file names: ${dealer.cards}`);
console.log(`card face values: ${dealer.handValues}`);
console.log(`hand total: ${dealer.handTotal}`);
console.log('\n');
