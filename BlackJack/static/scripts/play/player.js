class Player extends TableSeat{
    position;
    bet;
    dealer;
    splitActive = false;
    payout;

    constructor(position, bet=5){
        super();
        this.position = position;
        this.bet = bet;
    }
    hideCard(position){
        const promise = new Promise((resolve, reject)=>{
            document.getElementById(position).setAttribute('src',`static/cards/cards/zblank.png`)
            resolve();
        })
        return promise; 
    }
    updateSplit(){
        const promise = new Promise((resolve, reject)=>{
            const seat = this.dealer.currentPlayer.position; // 'L', 'C' or 'R'
            const sBet = this.dealer.currentPlayer.bet;      // amount of initial bet
            const sPos = this.dealer.pos + 1;                // index of player splitting + 1
            const sPlayer = new Player(`${seat}-split`, sBet);    // new split player
            const cardS = this.dealer.currentPlayer.cards.pop(); // returns the
            const card = this.dealer.currentPlayer.cards[0];
            this.dealer.currentPlayer.clearHand();
            this.dealer.currentPlayer.addCard(card);
            sPlayer.setDealer(this.dealer);
            sPlayer.addCard(cardS);
            sPlayer.splitActive = true;
            this.dealer.players.splice(sPos, 0, sPlayer);
            resolve();
            
            setTimeout(()=>{
                // To prevent spam hit clicking hit buttons are removed after click until next card
                // has been rendered.  The removing is done in the tableSeat.hit() method.  The split method
                // calls this hit method so the hit it tries to remove the hit but the button is not there.
                // if(element...) doesn't work because of the async conditions. so this inelegant method of 
                // creating hit buttons just so they can be deleted is a work-around, which will be revisited.
                document.getElementById('deal-hit').innerHTML=`<button id="hControl" type="button" class="btn btn-primary btn-sm" 
                    onclick="if(dealer.currentPlayer != dealer){dealer.currentPlayer.hit()};"> 
                    Hit </button>`
                this.dealer.currentPlayer.hit()},500);
            
            setTimeout(()=>{
                //
                document.getElementById('deal-hit').innerHTML=`<button id="hControl" type="button" class="btn btn-primary btn-sm" 
                    onclick="if(dealer.currentPlayer != dealer){dealer.currentPlayer.hit()};"> 
                    Hit </button>`
                this.dealer.players[sPos].hit()
                //
                document.getElementById('deal-hit').innerHTML=`<button id="hControl" type="button" class="btn btn-primary btn-sm" 
                    onclick="if(dealer.currentPlayer != dealer){dealer.currentPlayer.hit()};"> 
                    Hit </button>`
            
            },1400);

           
            document.getElementById(`c1${seat}-split`).classList.replace('hide','show')
            document.getElementById(`c2${seat}-split`).classList.replace('hide','show')
            console.log('show dubD')
            setTimeout(()=>{
                document.getElementById('dubD').innerHTML=`<button id="ddControl"  type="button" class="btn btn-primary btn-sm" 
                onclick="dealer.currentPlayer.dubD();">D.D.</button>`},1600)
            
        })
        return promise;
    }
    split(){
        document.getElementById('splitDiv').removeChild(document.getElementById('spControl'))
        
        if (this.handValues[0] == this.handValues[1] && this.cards.length == 2 && !this.splitActive){
            this.splitActive = true;
            this.dealer.playerPayout(2*this.bet,this.position);
            playerCash = playerCash - this.bet;
            setPlayerBank(playerCash);
            
            const position = 'c' + this.cards.length + this.position
            this.hideCard(position).then(()=>{
                setTimeout(()=>{this.updateSplit()},500)
                
            })
        }  
    }
    
    dubD(){
        if (this.cards.length == 2){
            if(!this.bj){
                this.DoubleD = true;

                if (this.splitActive){
                    let currentPlayerPos = this.dealer.currentPlayer.position
                    let otherBet;
                    console.log(currentPlayerPos)
                    for (const player of this.dealer.players){
                        if (player.position[0] == this.dealer.currentPlayer.position[0] ){
                            if(player.position != currentPlayerPos){
                                console.log(`not the current player: ${player.position}, bet=${player.bet}`)
                                otherBet = player.bet
                            }
                        }
                    }
                    this.dealer.playerPayout(2*this.bet + otherBet, this.position[0]);
                }else{
                    this.dealer.playerPayout(2*this.bet, this.position[0]);
                }
           
                playerCash = playerCash - this.bet
                setPlayerBank(playerCash);
                this.bet = 2 * this.bet;
            }
            this.hit();
            if (!this.bust && !this.bj){
                this.stand = true;
            }
        if (this.dealer.currentPlayer == this.dealer.players[this.dealer.players.length-2] ){
            document.getElementById('stand').removeChild(document.getElementById('stControl'))
        }
        }
        
    }
    setDealer(dealer){
        this.dealer = dealer;
    }
    setPayout(payout){
        this.payout = payout
    }
}