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
    doubleD = false;
    bj = false;

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
            // this.stand=true;
            this.setStand();
        }
        if (this.handTotal[1] == 21 && this.cards.length == 2){
            this.bj=true;
            this.stand=true;
            // this.setStand();
        }else if(this.handTotal[1] == 21 || this.handTotal[0]==21){
            // this.bj=true;
            // this.stand=true;
            this.setStand();
        }
    }
    setStand(){
        this.stand = true;
        this.dealer.nextPlayer()
    }
    clearHand(){
        this.cards = []
        this.handValues = []
        this.handTotal = [0,0];
        this.bust = false;
        this.stand = false;
        this.doubleD = false;
        this.bj = false;
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
      for (this.player of this.players){
            this.player.setDealer(this)
      }
      this.players.push(this)
    }
    addCard(card){
        this.cards.push(card);
        this.handValues.push(cardValues[card[1]])
        this.setHandTotal()
    }
    dealerPlay(){
        console.log('Dealer Playing hand.')
        let playDealer = false;
        for (this.player of this.players.slice(0, this.players.length-2)){
            if (this.player.bust == false && this.player.bj == false ){
                playDealer = true;
            }
        }
        if (playDealer){
        while((this.handTotal[0] < 17 && this.handTotal[1] <18) || (this.handTotal[0] < 17 && this.handTotal[1] >21)){
            this.hit()
            if (this.handTotal[0] > 21){
                break
               }
            }
        }
    }
    deal(){
        for (let i=0; i <2;i++){
            for (this.player of this.players){
                this.player.addCard(deck[boot.nextCard()])
            }
        }
        //IF dealer has BJ this.settleBet()
        if (this.players[this.players.length-1].handTotal[1] == 21){
            this.settleBets();
            this.pos = this.players.length-1;
            this.currentPlayer = this.players[this.pos];
        }else{
        this.pos = 0
        this.currentPlayer = this.players[this.pos]
        if (this.currentPlayer.stand == true){
            this.nextPlayer()
            }
        }
    }
    dealSingle(player){
        player.addCard(deck[boot.nextCard()])
    }
    nextPlayer(){
        this.pos+=1
        this.currentPlayer = this.players[this.pos]
        
        if (this.currentPlayer == this){
            this.dealerPlay();
            this.settleBets();
        }
        else if (this.currentPlayer.stand == true){
            this.nextPlayer()
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
        if (this.handTotal[1] == 21 && this.cards.length == 2 ){
            this.bj=true;
        }
    }
    setStand(){
        this.stand = true;
    }
    settleBets(){
        console.log('Doing Bet settling stuff!')
        //After round dealer hand is played, collect or pay
        // for(this.player of this.players){
            // Do bet settling stuff;
            //  this.player.clearHand();
            // this.player.bet = 0;
        // }
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
        const seat = this.dealer.currentPlayer.position; // 'L', 'C' or 'R'
        const sBet = this.dealer.currentPlayer.bet;      // amount of initial bet
        const sPos = this.dealer.pos + 1;                // index of player splitting + 1
        const sPlayer = new Player(`S${seat}`, sBet);    // new split player
        const cardS = this.dealer.currentPlayer.cards.pop(); //
        const card = this.dealer.currentPlayer.cards[0];
        this.dealer.currentPlayer.clearHand();
        this.dealer.currentPlayer.addCard(card);
        sPlayer.addCard(cardS);
        sPlayer.setDealer(this.dealer);
        this.dealer.players.splice(sPos, 0, sPlayer);
        this.dealer.currentPlayer.hit();
        this.dealer.players[sPos].hit();
    }
    dubD(){
        this.hit();
        if (!this.bust){
            // this.dealer.nextPlayer();
            this.doubleD = true;
            this.bet = 2 * this.bet;
            this.setStand();
        }
    }
    setDealer(dealer){
        this.dealer = dealer;
    }
}
