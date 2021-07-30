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
        const position = 'c' + this.cards.length + this.position
        this.dealer.dealCards.push(position)
        console.log(`${position} takes: ${card}`)
        document.getElementById(position).setAttribute('src',`static/cards/cards/${card}`)
        if (this.cards.length >2){
            document.getElementById(position).classList.replace('hide',`show`)
        }
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
            this.stand=true;
            // this.setStand();
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
        if(!this.bust && !this.stand){
            this.dealer.dealSingle(this)
            console.log('\n')
            console.log(this)
            console.log(`card file names: ${this.cards}`)
            console.log(`card face values: ${this.handValues}`)
            console.log(`hand total: ${this.handTotal}`)
        }else{
            this.dealer.nextPlayer()
        }
    }
}

class Dealer extends TableSeat{
    players = [];
    currentPlayer;
    pos = 0;
    dealCards = [];
    stand;
    highlightPos;
    position = 'D';
    roundOver = false;
    enableDeal = true;
    pause = 1500;
    
    constructor(players){
      super();
      this.players = [...players];
      
      this.currentPlayer = this.players[this.pos];
      for (this.player of this.players){
            this.player.setDealer(this)
      }
      this.players.push(this)
    }
    // addCard(card){
    //     this.cards.push(card);

    //     const position = 'd' + this.cards.length
    //     this.dealCards.push(position)
    //     console.log(`${position} takes: ${card}`)
    //     if (this.cards.length ==2){
    //         document.getElementById(position).setAttribute('src',`static/cards/cards/zback.png`)
    //     }else{
    //         document.getElementById(position).setAttribute('src',`static/cards/cards/${card}`)
    //         if (this.cards.length >2){
    //             document.getElementById(position).classList.replace('hide',`show`)
    //         }
    //     }
        
    //     this.handValues.push(cardValues[card[1]])
    //     this.setHandTotal()
    // }

    
    addCard(card){
        this.cards.push(card);

        const position = 'd' + this.cards.length
        this.dealCards.push(position)
        console.log(`${position} takes: ${card}`)
        this.handValues.push(cardValues[card[1]])
        this.setHandTotal()

        if (this.cards.length == 1){
            document.getElementById(position).setAttribute('src',`static/cards/cards/${card}`)

        }else if (this.cards.length ==2){
            document.getElementById(position).setAttribute('src',`static/cards/cards/zback.png`)
        }else{
            
            setTimeout(()=>{
                document.getElementById(position).setAttribute('src',`static/cards/cards/${card}`)
                document.getElementById(position).classList.replace('hide',`show`)
                let now = new Date()
                console.log(now.getTime())
            },this.pause)
            
            this.pause +=1000;
        }  
    }
    dealerPlay(){
        this.roundOver = true;
        console.log('Dealer Playing hand.')
        dealerCard2EL.setAttribute('src',`static/cards/cards/${this.cards[1]}`)
        let playDealer = false;
        for (this.player of this.players.slice(0, this.players.length-1)){
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
        this.stand = true;
    }
    deal(){
        // Disable second deal before current hand is played.
        if (this.enableDeal){
            this.enableDeal = false;
            for (let i=0; i <2;i++){
                for (this.player of this.players){
                    this.player.addCard(deck[boot.nextCard()])
                }
            }
    
            if (this.players[this.players.length-1].handTotal[1] == 21){
                this.pos = this.players.length-1;
                this.currentPlayer = this.players[this.pos];
                this.settleBets();
            }else{
            this.pos = 0
            this.currentPlayer = this.players[this.pos]
            
            this.highlightPos = 'c'+this.currentPlayer.position+'-outline'
            console.log(this.highlightPos)
            document.getElementById(this.highlightPos).style.opacity=1;
    
            if (this.currentPlayer.stand == true){
                this.nextPlayer()
                }
            }
        }
        
    }
    dealSingle(player){
        player.addCard(deck[boot.nextCard()])
    }
    nextPlayer(){
        
        this.pos+=1
        this.currentPlayer = this.players[this.pos]
        // if (!this.currentPlayer.position.includes('split')){
            
        //     try{
        //         this.highlightPos = 'c'+this.players[this.pos-1].position+'-outline'
        //         document.getElementById(this.highlightPos).style.opacity=.5;
        //     }catch(e){
        //         this.highlightPos = 'c'+this.players[this.pos-2].position+'-outline'
        //         document.getElementById(this.highlightPos).style.opacity=.5;
        //     }
            

        //     if (this.currentPlayer != this){
        //         this.highlightPos = 'c'+this.currentPlayer.position+'-outline'
        //         document.getElementById(this.highlightPos).style.opacity=1;
        //     }
        // }

        
                this.highlightPos = 'c'+this.players[this.pos-1].position+'-outline'
                document.getElementById(this.highlightPos).style.opacity=.5;
                if (this.players[this.pos-1].position.includes('split')){
                    document.getElementById(this.highlightPos).style.opacity=0;
                }
                
                if (this.currentPlayer != this){
                    this.highlightPos = 'c'+this.currentPlayer.position+'-outline'
                    document.getElementById(this.highlightPos).style.opacity=1;
                    document.getElementById(this.highlightPos).classList.replace('hide','show')
                }

        
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
    clearTable(){
        let cards = this.dealCards
        for (let i=0; i<cards.length; i++){
            let pos = cards[i]
            document.getElementById(pos).setAttribute('src',`static/cards/cards/zblank.png`)
            document.getElementById(pos).classList.replace('show',`hide`)
        }
        if (boot.stack<19){
            document.getElementById('d-tray-card').setAttribute('src',`static/table_objects/tray_stacks/stack_${boot.stack}.png`)
            boot.stack+=1
        }
        
    }
}


class Player extends TableSeat{
    position;
    bet;
    dealer;
    splitActive = false;
    constructor(position, bet=5){
        super();
        this.position = position;
        this.bet = bet;
    }
    split(){
        if (this.handValues[0] == this.handValues[1] && this.cards.length == 2 && !this.splitActive){
            this.splitActive = true;

            
            const position = 'c' + this.cards.length + this.position

            document.getElementById(position).setAttribute('src',`static/cards/cards/zblank.png`)
            
            const seat = this.dealer.currentPlayer.position; // 'L', 'C' or 'R'
            const sBet = this.dealer.currentPlayer.bet;      // amount of initial bet
            const sPos = this.dealer.pos + 1;                // index of player splitting + 1
            const sPlayer = new Player(`${seat}-split`, sBet);    // new split player
            const card = this.dealer.currentPlayer.cards.pop(); //
            const cardS = this.dealer.currentPlayer.cards[0];
            this.dealer.currentPlayer.clearHand();
            this.dealer.currentPlayer.addCard(cardS);
            sPlayer.setDealer(this.dealer);
            sPlayer.addCard(card);
            sPlayer.splitActive = true;
            document.getElementById(`c1${seat}-split`).classList.replace('hide','show')
            this.dealer.players.splice(sPos, 0, sPlayer);
            this.dealer.currentPlayer.hit();
            this.dealer.players[sPos].hit();
            document.getElementById(`c2${seat}-split`).classList.replace('hide','show')

        }
        
    }
    dubD(){
        if (this.cards.length == 2){
            this.hit();
            if (!this.bust && !this.bj){
                this.doubleD = true;
                this.bet = 2 * this.bet;
                this.setStand();
            }
        }
        
    }
    setDealer(dealer){
        this.dealer = dealer;
    }
}
