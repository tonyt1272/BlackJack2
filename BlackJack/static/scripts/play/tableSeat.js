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
        this.dealer.dealCards.push(position)  // record that card was pushed to this position for cleanup later

        document.getElementById(position).setAttribute('src',`static/cards/cards/${card}`)
        if (this.cards.length >2){
            document.getElementById(position).classList.replace('hide',`show`)
        }
        this.handValues.push(cardValues[card[1]])
        
        setTimeout(()=>{this.setHandTotal()}, 1000)
    } 

    setHandTotal(){
        
        
        this.handTotal[0] = sum(this.handValues)
        if (this.handValues.includes(1)){
            this.handTotal[1] = this.handTotal[0]+10
        }
        if (this.DoubleD){
            if (this.handTotal[0] > 21){
                this.bust = true;
                this.payout = 0;
            }
            this.setStand();
        }else if (this.handTotal[0] > 21){
            this.bust = true;
            this.payout = 0;
            this.setStand();
        }
        if (this.handTotal[1] == 21 && this.cards.length == 2 && !this.splitActive){
            this.bj = true;
            this.stand = true;

        }else if(this.handTotal[1] == 21 || this.handTotal[0]==21){
            this.stand=true;
        }
    }
    setStand(){
        // remove split button if present
        if (document.getElementById('spControl')){
            document.getElementById('splitDiv').removeChild(document.getElementById('spControl'))
        }
        
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
        // remove split button if present
        if (document.getElementById('spControl')){
            document.getElementById('splitDiv').removeChild(document.getElementById('spControl'))
        }
        // remove double-down button if present
        if (document.getElementById('ddControl')){
            document.getElementById('dubD').removeChild(document.getElementById('ddControl'))
        }

        if(!this.bust && !this.stand){
            this.dealer.dealSingle(this)
        }else{
            this.dealer.nextPlayer()
        }
    }
}