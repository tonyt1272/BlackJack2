function sum(array) {
    let sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      }, 0)
    return sum
}

class TableSeat{
    cards = [];
    handValues = [];
    handTotal = [0,0];
    bust = false;
    stand = false;
    double = false;

    addCard(card){
        this.cards.push(card);
        this.handValues.push(cardValues[card[1]])
        this.setHandTotal()
        } 
    setHandTotal(){
        this.handTotal[0] = sum(this.handValues)
        if (this.handValues.includes(1)){
            this.handTotal[1] = this.handTotal[0]+10
        }
        if (this.handTotal[0] > 21){
            this.bust = true;
            this.dealer.nextPlayer()
        }
    }
    setStand(){
        this.stand = true;
        this.dealer.nextPlayer()
    }
    getStand(){

    }
    clearHand(){
        this.cards = []
        this.handValues = []
        this.handTotal = [0,0];
    }
    hit(){
        if(!this.bust){
            this.dealer.dealSingle(this)
            console.log('\n')
            console.log(this)
            console.log(`card file names: ${this.cards}`)
            console.log(`card face values: ${this.handValues}`)
            console.log(`hand total: ${this.handTotal}`)
        }
    }
}

class Dealer extends TableSeat{
    players = [];
    currentPlayer;
    pos = 0;

    constructor(players){
      super();
      this.players = [...players];
      
      this.currentPlayer = this.players[this.pos];
    //   console.log(this.players)
      for (this.player of this.players){
            this.player.setDealer(this)
      }
      this.players.push(this)
    }

    dealerPlay(){
        //Dealer play logic: draw to 16 and soft 17
    }

    deal(){
        
        for (let i=0; i <2;i++){
            for (this.player of this.players){
                this.player.addCard(deck[boot.nextCard()])
            }
        }
        this.pos = 0
        this.currentPlayer = this.players[this.pos]
    }
    dealSingle(player){
        player.addCard(deck[boot.nextCard()])
    }

    nextPlayer(){
        this.pos+=1
        if (true){
            this.currentPlayer = this.players[this.pos]
        }
        else{
            // Do end of round stuff
        }
        
    }
    hit(){
        if(!this.bust){
            this.dealSingle(this)
            console.log('\n')
            console.log(this)
            console.log(`card file names: ${this.cards}`)
            console.log(`card face values: ${this.handValues}`)
            console.log(`hand total: ${this.handTotal}`)
        }
    }
    setHandTotal(){
        this.handTotal[0] = sum(this.handValues)
        if (this.handValues.includes(1)){
            this.handTotal[1] = this.handTotal[0]+10
        }
        if (this.handTotal[0] > 21){
            this.bust = true;
        }
    }
    setStand(){
        this.stand = true;
    }
    clearAll(){
        for(this.player of this.players){
            this.player.clearHand();
        }
    }
}


class Player extends TableSeat{
    position;
    bet;
    dealer;
    constructor(position, bet=5){
        super();
        this.position = position;
        this.bet = bet;
    }
    
    split(){
        // add player after dealer.current player, deal one card to each player play each player
        // hand as normal, in sequence
    }
    dubD(){
        this.hit();
        if (!this.bust){
            this.dealer.nextPlayer();
        }
    }

    setDealer(dealer){
        this.dealer = dealer;
    }


}


// dev script
deck = newDeck(); // master reference for cards
boot = new Boot(); // current boot of cards
// boot.shuffle()
// console.log(boot)

PlayerL = new Player('L',5);
PlayerC = new Player('C',10);
PlayerR = new Player('R',5);
players = [PlayerL, PlayerC, PlayerR];  // players active in a round



dealer = new Dealer(players);

boot.shuffle();
// console.log(boot)

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