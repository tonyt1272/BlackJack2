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
    pause = 1000;
    
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

            // remove the deal button
            // document.getElementById('dControl').remove()
            document.getElementById('deal-hit').removeChild(document.getElementById('dControl'))
            //

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

            // Add player control buttons:
            document.getElementById('deal-hit').innerHTML=`<button id="hControl" type="button" class="btn btn-primary btn-sm" 
                                                            onclick="if(dealer.currentPlayer != dealer){dealer.currentPlayer.hit()};"> 
                                                            Hit </button>`
            document.getElementById('stand').innerHTML=`<button id="stControl" type="button" class="btn btn-primary btn-sm" 
                                                        onclick="setTimeout(()=>{dealer.currentPlayer.setStand()},500);">
                                                        Stand</button>`
            document.getElementById('dubD').innerHTML=`<button id="ddControl"  type="button" class="btn btn-primary btn-sm" 
                                                        onclick="dealer.currentPlayer.dubD();">D.D.</button>`

            //using this.players[0] because for some reason this.currentPlayer isn't capturing the correct player.
            //not sure why.  Will figure out later and replace with this.currentPlayer when possible.
            //this.currentPlayer is used for button control later in game flow, this issue only occurs immediately after
            //deal                                            
                if(this.players[0].handValues[0] == this.players[0].handValues[1]){
                        document.getElementById('splitDiv').innerHTML=`<button id="spControl" type="button" class="btn btn-primary btn-sm" 
                                                                        onclick="dealer.currentPlayer.split();">Split</button>`
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

            // update control buttons split
            if(this.currentPlayer.handValues[0] == this.currentPlayer.handValues[1] && !this.currentPlayer.splitActive){
                document.getElementById('splitDiv').innerHTML=`<button id="spControl" type="button" class="btn btn-primary btn-sm" 
                                                                  onclick="dealer.currentPlayer.split();">Split</button>`
            }
            // update control buttons double-down
            document.getElementById('dubD').innerHTML=`<button id="ddControl"  type="button" class="btn btn-primary btn-sm" 
                                                        onclick="dealer.currentPlayer.dubD();">D.D.</button>`
        }

        if (this.currentPlayer == this){
            this.dealerPlay();
            this.settleBets();
            // remove hit and stand buttons
            document.getElementById('deal-hit').removeChild(document.getElementById('hControl'))
            document.getElementById('stand').removeChild(document.getElementById('stControl'))
            // remove split button if present
            if (document.getElementById('spControl')){
                document.getElementById('splitDiv').removeChild(document.getElementById('spControl'))
            }
            // remove double-down button if present
            if (document.getElementById('ddControl')){
                document.getElementById('dubD').removeChild(document.getElementById('ddControl'))
            }

            // update chip stacks based on play results
            // fake settling for testing:
            

            // add collect chips, rebet button
            

            
            
            
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
            this.bj = true;
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
        //clears cards from table
        let cards = this.dealCards
        for (let i=0; i<cards.length; i++){
            let pos = cards[i]
            document.getElementById(pos).setAttribute('src',`static/cards/cards/zblank.png`)
            document.getElementById(pos).classList.replace('show',`hide`)
        }

        //update discard tray stack of cards
        if (boot.stack<19){
            document.getElementById('d-tray-card').setAttribute('src',`static/table_objects/tray_stacks/stack_${boot.stack}.png`)
            boot.stack+=1
        }
        
        // Code below if for testing only, not the final solution
        players = []
        bet_status = {LB1: [false,0], 
                        LB2: [false,0], 
                        LB3: [false,0], 
                        CB1: [false,0], 
                        CB2: [false,0], 
                        CB3: [false,0],
                        RB1: [false,0],
                        RB2: [false,0],
                        RB3: [false,0]}

        document.getElementById('playerC-bet1').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerC-bet2').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerC-bet3').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerL-bet1').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerL-bet2').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerL-bet3').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerR-bet1').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerR-bet2').setAttribute('src','static/chips/blankChip.png')
        document.getElementById('playerR-bet3').setAttribute('src','static/chips/blankChip.png')

        //
        
    }
}
