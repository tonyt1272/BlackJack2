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
        if (document.getElementById('hControl')){
            document.getElementById('deal-hit').removeChild(document.getElementById('hControl'))
            }
        if (document.getElementById('stControl')){
            document.getElementById('stand').removeChild(document.getElementById('stControl'))
            }
        if (document.getElementById('ddControl')){
            document.getElementById('dubD').removeChild(document.getElementById('stControl'))
            }
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
        //settle bets after dealer's last card is revealed
        // console.log(`number of dealer cards ${this.cards.length}`)
        if (this.handTotal[1] == 21 ){
            var pause = (this.cards.length)*1000 + 3750
        }else{
            var pause = (this.cards.length-2)*1000 + 2000}

        setTimeout(()=>{this.settleBets()}, pause);
    }

    deal(){
        //record bet_status for the next round, befor any splits or double-down
        prev_bet_status ={...bet_status}
        prev_bet_total = 0;
        for(let letter of ['L', 'C','R']){
            for(let num of [1,2,3]){
                prev_bet_total += prev_bet_status[`${letter}B${num}`][1]
            }
        }
        console.log(`prev_bet_total: ${prev_bet_total}`)
         
        // Disable second deal before current hand is played.
        if (this.enableDeal){
            // remove the deal button
            // document.getElementById('dControl').remove()  //new way to remove
            document.getElementById('deal-hit').removeChild(document.getElementById('dControl')) //old way to remove
            document.getElementById('dubD').removeChild(document.getElementById('cbControl'));
            playerBank0EL.setAttribute('draggable','false')
            playerBank1EL.setAttribute('draggable','false')
            playerBank2EL.setAttribute('draggable','false')
            playerBank3EL.setAttribute('draggable','false')
            playerBank4EL.setAttribute('draggable','false')
            playerBank5EL.setAttribute('draggable','false')
            playerBank6EL.setAttribute('draggable','false')

            this.enableDeal = false;
            for (let i=0; i <2;i++){
                for (this.player of this.players){
                    this.player.addCard(deck[boot.nextCard()])
                }
            }
    
            if (this.players[this.players.length-1].handTotal[1] == 21){
                this.pos = this.players.length-1;
                this.currentPlayer = this.players[this.pos];
                this.dealerPlay();
            }else{
            this.pos = 0
            this.currentPlayer = this.players[this.pos]
            this.highlightPos = 'c'+this.currentPlayer.position+'-outline'
            document.getElementById(this.highlightPos).style.opacity=1;

            var pause = dealer.players.length*1200
    
            setTimeout(()=>{
                    // Add player control buttons:
                    // add hit icon
                    document.getElementById('deal-hit').innerHTML=`<button id="hControl" type="button" class="btn btn-outline-primary btn-sm" 
                    onclick="if(dealer.currentPlayer != dealer){dealer.currentPlayer.hit()};">
                    <span class="material-icons-outlined">touch_app</span> 
                    </button>`
                    // inputted stand icon
                    document.getElementById('stand').innerHTML=`<button id="stControl" type="button" class="btn btn-outline-primary btn-sm" 
                            onclick="setTimeout(()=>{dealer.currentPlayer.setStand()},500);"><span class="material-icons-outlined">
                            pan_tool
                            </span>
                            </button>`
                    if(playerCash >= this.players[0].bet){
                    document.getElementById('dubD').innerHTML=`<button id="ddControl"  type="button" class="btn btn-outline-primary btn-sm" 
                            onclick="dealer.currentPlayer.dubD();">D.D.</button>`
                    }                                            

                    //using this.players[0] because for some reason this.currentPlayer isn't capturing the correct player.
                    //not sure why.  Will figure out later and replace with this.currentPlayer when possible.
                    //this.currentPlayer is used for button control later in game flow, this issue only occurs immediately after
                    //deal.                                          
                    if(this.players[0].handValues[0] == this.players[0].handValues[1] && playerCash >= this.players[0].bet){
                    document.getElementById('splitDiv').innerHTML=`<button id="spControl" type="button" class="btn btn-outline-primary btn-sm" 
                                            onclick="dealer.currentPlayer.split();">Split</button>`
                    }
                    //

            }, pause);

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

            // add hit icon
            document.getElementById('deal-hit').innerHTML=`<button id="hControl" type="button" class="btn btn-outline-primary btn-sm" 
                    onclick="if(dealer.currentPlayer != dealer){dealer.currentPlayer.hit()};"> 
                    <span class="material-icons-outlined">touch_app</span>
                   </button>`

            // update control buttons split
            if(this.currentPlayer.handValues[0] == this.currentPlayer.handValues[1] && !this.currentPlayer.splitActive && playerCash >= this.currentPlayer.bet){
                document.getElementById('splitDiv').innerHTML=`<button id="spControl" type="button" class="btn btn-outline-primary btn-sm" 
                                                                  onclick="dealer.currentPlayer.split();">Split</button>`
            }
            // update control buttons double-down
            if(playerCash >= this.currentPlayer.bet){
                document.getElementById('dubD').innerHTML=`<button id="ddControl"  type="button" class="btn btn-outline-primary btn-sm" 
                                                        onclick="dealer.currentPlayer.dubD();">D.D.</button>`
            }
            
        }

        if (this.currentPlayer == this){

            // remove hit and stand buttons if present
            if (document.getElementById('hcontrol')){
                document.getElementById('deal-hit').removeChild(document.getElementById('hControl'))
            }
            if (document.getElementById('stControl')){
                document.getElementById('stand').removeChild(document.getElementById('stControl'))
            }
            
            // remove split button if present
            if (document.getElementById('spControl')){
                document.getElementById('splitDiv').removeChild(document.getElementById('spControl'))
            }
            // remove double-down button if present
            if (document.getElementById('ddControl')){
                document.getElementById('dubD').removeChild(document.getElementById('ddControl'))
            }
            this.dealerPlay(); 
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
        let payouts= {};
        let bankUpdate = 0;
        for (this.player of this.players.slice(0,this.players.length-1)){
            if (this.bust){
                if(!this.player.bust){
                    if(this.player.bj){
                        this.player.payout = 2 * this.player.bet + .5 * this.player.bet;
                    }else {
                        this.player.payout = 2 * this.player.bet;
                    }
                }
            } else {
                const playerTotals = this.player.handTotal.filter(val => val<=21);
                const playerTotal = Math.max(...playerTotals);
                const dealerTotals = this.handTotal.filter(val => val<=21);
                const dealerTotal = Math.max(...dealerTotals);

                console.log(`player total: ${playerTotal}`)
                console.log(`delaer total: ${dealerTotal}`)
                if(!this.player.bust){
                    if(this.player.bj && !this.bj){
                        this.player.payout = 2 * this.player.bet + .5 * this.player.bet;
                    }else if(this.player.bj && this.bj){
                        this.player.payout = this.player.bet;
                    }else if (playerTotal > dealerTotal){
                        this.player.payout = 2 * this.player.bet;
                    }else if (playerTotal == dealerTotal){
                        this.player.payout = this.player.bet;
                    }else if (playerTotal < dealerTotal){
                        this.player.payout = 0;
                    }
                }
            }
            bankUpdate+=this.player.payout;
            console.log(`Postion: ${this.player.position.charAt(0)}, payout=${this.player.payout}`)
            if(Object.keys(payouts).includes(this.player.position.charAt(0))){
                payouts[this.player.position.charAt(0)] += this.player.payout;
            }else{
                payouts[this.player.position.charAt(0)] = this.player.payout;
            }
        }
        // console.log(payouts)
    
        
        for (const [key, value] of Object.entries(payouts)) {
            console.log(`${key}: ${value}`);
            // Maybe set timeout for each player payout so that it appears dealer goes from left to right, 
            // reconciling bets, and maybe highlight the box as you go
            this.playerPayout(value,key)
          }
        console.log(`total payout: ${bankUpdate}`) 
        // let pause = (this.players.length - 1) * (750) //1250
        let pause = 750
        let buttonText;
        if (bankUpdate > 0){
            buttonText = 'Collect'
        // }else if(bankUpdate == 0){
        //     buttonText = 'Push'
        // 
        }else{
            buttonText = 'Clear'
        }
        let playerCashString = `player cash: ${playerCash+bankUpdate}`
        setTimeout(()=>{
            const collectNext = document.getElementById('deal-hit')
            collectNext.innerHTML=`<button id="collect-next" type="button" class="btn btn-primary btn-sm"
            onclick="playerCash = playerCash + ${bankUpdate}; setPlayerBank(playerCash);
            document.getElementById('deal-hit').removeChild(document.getElementById('collect-next'));
            dealer.clearTable(); dealer.showRebet();" >${buttonText}</button>`
        },pause)

        console.log(`${playerCashString}`);  
    }

    showRebet(){
        // console.log(prev_bet_total)
        if (prev_bet_total <= playerCash){
            const rebet = document.getElementById('stand')
            rebet.innerHTML=`<button id="rebet" type="button" class="btn btn-primary btn-sm"
            onclick="setPlayerBank(playerCash);
            document.getElementById('stand').removeChild(rebet);
            dealer.rebet()" >Quick Bet</button>`
        }
    }

    playerPayout(chipsPayout,pos){
                     const bet_pos1_id = "player"+pos+"-bet1";
                     const bet_pos_id = "player"+pos+"-bet2";
                     const bet_pos3_id = "player"+pos+"-bet3";
                     const bet_pos1 = document.getElementById(bet_pos1_id);
                     const bet_pos = document.getElementById(bet_pos_id);
                     const bet_pos3 = document.getElementById(bet_pos3_id);
                     
                     const betConfig = StrangeBetConfigs[chipsPayout]
                     const finalBetConfig = convertBetConfig(betConfig)

                     if(finalBetConfig[0][1] > 0){
                        bet_pos1.classList.replace('hide','show')
                        bet_pos1.setAttribute('src',`static/chips/${finalBetConfig[0][0]}/${finalBetConfig[0][1]}x${finalBetConfig[0][0]}.png`)}
                     else{
                        bet_pos1.classList.replace('show','hide')
                        bet_pos1.setAttribute('src',`static/chips/blankChip.png`)
                     }
    
                    if(finalBetConfig[1][1] > 0){
                        bet_pos.classList.replace('hide','show')
                        bet_pos.setAttribute('src',`static/chips/${finalBetConfig[1][0]}/${finalBetConfig[1][1]}x${finalBetConfig[1][0]}.png`)}
                    else{
                        bet_pos.classList.replace('show','hide')
                        bet_pos.setAttribute('src',`static/chips/blankChip.png`)
                    }
                     
                    if(finalBetConfig[2][1] > 0){
                        bet_pos3.classList.replace('hide','show')
                        bet_pos3.setAttribute('src',`static/chips/${finalBetConfig[2][0]}/${finalBetConfig[2][1]}x${finalBetConfig[2][0]}.png`)}
                    else{
                        bet_pos3.classList.replace('show','hide')
                        bet_pos3.setAttribute('src',`static/chips/blankChip.png`)
                    }            
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
  
    }

    rebet(){
        bet_status = {LB1: [false,0], 
                      LB2: [false,0], 
                      LB3: [false,0], 
                      CB1: [false,0], 
                      CB2: [false,0], 
                      CB3: [false,0],
                      RB1: [false,0],
                      RB2: [false,0],
                      RB3: [false,0]}
        const n = [2,1,3]
        const positions = ['C','L','R']
        
        const posC = document.getElementById('playerC-bet2')
        const posL = document.getElementById('playerL-bet2')
        const posR = document.getElementById('playerR-bet2')
        const posDict = {'C':posC,
                         'L':posL,
                         'R':posR}

        for (const pos of positions){    
            for(const i of n){
                const chipValue = convertDrag(prev_bet_status[`${pos}B${i}`][0])
                const numChips = prev_bet_status[`${pos}B${i}`][1]/convertDrag(prev_bet_status[`${pos}B${i}`][0])
                if (chipValue){
                    for (let j=0;j < numChips;j++)
                    setBet(prev_bet_status[`${pos}B${i}`][0],posDict[`${pos}`])
                }
            }
        }

    }
}
