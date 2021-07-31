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
    
    addCard(card){
        this.cards.push(card);

        const position = 'd' + this.cards.length
        this.dealCards.push(position)
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
            },this.pause)
            
            this.pause +=1000;
        }  
    }
    dealerPlay(){
        this.roundOver = true;
        console.log('Dealer Playing hand.')
        setTimeout(()=>{dealerCard2EL.setAttribute('src',`static/cards/cards/${this.cards[1]}`)},700)
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
