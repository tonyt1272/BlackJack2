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
            setTimeout(()=>{this.dealer.currentPlayer.hit()},500);
            setTimeout(()=>{this.dealer.players[sPos].hit()},1400);
           
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
            const position = 'c' + this.cards.length + this.position
            this.hideCard(position).then(()=>{
                setTimeout(()=>{this.updateSplit()},500)
                
            })
        }
        
        
    }
    dubD(){
        if (this.cards.length == 2){
            this.DoubleD = true;
            this.hit();
            if (!this.bust && !this.bj){
                this.bet = 2 * this.bet;
                this.stand = true;
            }
        }
        
    }
    setDealer(dealer){
        this.dealer = dealer;
    }
}