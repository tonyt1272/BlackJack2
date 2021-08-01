function setChip(drag_bet,bet_pos){
    const promise = new Promise((resolve, reject) =>{
        // bet_pos :HTML Element where the chip is to be dropped
        // drag_bet:Chip amount of the dragged chip, string 'five', 'ten', etc.
        const betPosition2 = bet_pos.id.slice(6,7)+'B2';
        const betPosition1 = bet_pos.id.slice(6,7)+'B1';
        const betPosition3 = bet_pos.id.slice(6,7)+'B3';
        const betAmount = drag_bet;
        const outline = document.getElementById('c'+bet_pos.id.slice(6,7)+'-outline');
        
        const id1 = bet_pos.id.slice(0,7)+'-bet1'
        const id3 = bet_pos.id.slice(0,7)+'-bet3'
        const bet_pos1 = document.getElementById(id1)
        const bet_pos3 = document.getElementById(id3)

        //logging status before bet
        console.log(`chip moved: ${betAmount}`);
        console.log(`box bet placed in: ${betPosition2}`);
        // console.log(`previous bet status:  ${bet_status[betPosition2][0]}`);
        console.log(`previous bet amount 1:  ${bet_status[betPosition1][1]}`);
        console.log(`previous bet amount 2:  ${bet_status[betPosition2][1]}`);
        console.log(`previous bet amount 3:  ${bet_status[betPosition3][1]}`);
        const amount = convertDrag(drag_bet);
        const newBetTotal = bet_status[betPosition1][1] + bet_status[betPosition2][1]
                          + bet_status[betPosition3][1] + amount
        console.log(`Desired Bet Total: ${newBetTotal}`)                  
        //
        if (newBetTotal <= 500){
        //place bet and update bet chips image
        
            if (bet_status[betPosition2][1]==0){
                bet_pos.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`);
                bet_status[betPosition2][0] = drag_bet;
                bet_status[betPosition2][1] += amount;
                setPlayerBank(drag_bet)
            } else if (bet_status[betPosition2][0] == drag_bet && bet_status[betPosition2][1] < 6*amount){
                const numChips = (bet_status[betPosition2][1]/amount) + 1;
                bet_status[betPosition2][1] += amount;
                bet_pos.setAttribute('src',`static/chips/${drag_bet}/${numChips}x${drag_bet}.png`);
                setPlayerBank(drag_bet)
            } else if(bet_status[betPosition1][1]==0){
                bet_pos1.classList.replace('hide','show')
                bet_pos1.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`);
                bet_status[betPosition1][0] = drag_bet;
                bet_status[betPosition1][1] += amount;
                setPlayerBank(drag_bet)

                // add event listeners for position 1
                // bet_pos1.addEventListener("dragover", ev => {
                //     ev.preventDefault();
                //     outline.classList.add('droppable')
                // });
                // bet_pos1.addEventListener("dragleave", ev => {
                //     ev.preventDefault();
                //     outline.classList.remove('droppable')
                // });
                // bet_pos1.addEventListener("drop", ev => {
                //     ev.preventDefault();
                //     setBet(drag_bet_g, bet_pos1)
                //     outline.classList.remove('droppable')
                // });
                //

            }  else if (bet_status[betPosition1][0] == drag_bet && bet_status[betPosition1][1] < 6*amount){
                const numChips = (bet_status[betPosition1][1]/amount) + 1;
                bet_status[betPosition1][1] += amount;
                bet_pos1.setAttribute('src',`static/chips/${drag_bet}/${numChips}x${drag_bet}.png`);
                setPlayerBank(drag_bet)
            } else if(bet_status[betPosition3][1]==0){
                bet_pos3.classList.replace('hide','show')
                bet_pos3.setAttribute('src',`static/chips/${drag_bet}/1x${drag_bet}.png`);
                bet_status[betPosition3][0] = drag_bet;
                bet_status[betPosition3][1] += amount;
                setPlayerBank(drag_bet)

            //add event listeners for position 3
            // bet_pos3.addEventListener("dragover", ev => {
            //     ev.preventDefault();
            //     outline.classList.add('droppable')
            // });
            // bet_pos3.addEventListener("dragleave", ev => {
            //     ev.preventDefault();
            //     outline.classList.remove('droppable')
            // });
            // bet_pos3.addEventListener("drop", ev => {
            //     ev.preventDefault();
            //     setBet(drag_bet_g, bet_pos3)
            //     outline.classList.remove('droppable')
            // });
            //

            } else if (bet_status[betPosition3][0] == drag_bet && bet_status[betPosition3][1] < 6*amount){
                const numChips = (bet_status[betPosition3][1]/amount) + 1;
                bet_status[betPosition3][1] += amount;
                bet_pos3.setAttribute('src',`static/chips/${drag_bet}/${numChips}x${drag_bet}.png`);
                setPlayerBank(drag_bet)
            }
            else{console.log('Strange Bet!');
                 const betConfig = StrangeBetConfigs[newBetTotal]
                 console.log(`Config for Strange Bet: ${betConfig}`)
                 const finalBetConfig = convertBetConfig(betConfig)
                 console.log(`final Strange Bet Config: ${finalBetConfig}`)
                 for(item of finalBetConfig){
                     console.log(item)
                 }
                 bet_status[betPosition1][0] = finalBetConfig[0][0]
                 bet_status[betPosition1][1] = betConfig[0]
                 bet_status[betPosition2][0] = finalBetConfig[1][0]
                 bet_status[betPosition2][1] = betConfig[1]
                 bet_status[betPosition3][0] = finalBetConfig[2][0]
                 bet_status[betPosition3][1] = betConfig[2]
                 
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
                 
                setPlayerBank(drag_bet)
                }
        }else{
            console.log('Max Bet exceeded!')
            var audio = new Audio('static/audio/short_bark.wav');
            audio.play()
            // $('.alert').alert("Table limit is $500")
            // $('#exampleModal').modal('show');
            // centerWindow();
        }
        //logging status after bet
        // console.log(`current bet status:  ${bet_status[betPosition2][0]}`)
        console.log(`current bet amount 1:  ${bet_status[betPosition1][1]}`)
        console.log(`current bet amount 2:  ${bet_status[betPosition2][1]}`)
        console.log(`current bet amount 3:  ${bet_status[betPosition3][1]}`)
        console.log('\n')
        resolve('success');
    })
    return promise;
}
async function setBet(drag_bet,bet_pos){
    await setChip(drag_bet,bet_pos).then(responseData =>{
        bet_pos.classList.replace('hide','show');

        //Logic for Adding players to game based on setBet object
        //get the total bet for each position then re-build players array
        playerL = new Player('L',bet_status.LB1[1]+bet_status.LB2[1]+bet_status.LB3[1])
        playerC = new Player('C',bet_status.CB1[1]+bet_status.CB2[1]+bet_status.CB3[1])    
        playerR = new Player('R',bet_status.RB1[1]+bet_status.RB2[1]+bet_status.RB3[1])
        players = []    
        for (player of [playerL, playerC, playerR]){
            if (player.bet > 0){
                players.push(player)
            }
        }
                
        console.log(`Player Cash: \$${playerCash}`)
        if (!document.getElementById('deal-hit').contains(document.getElementById('dControl'))){
            document.getElementById('deal-hit').innerHTML=
            '<button id="dControl" type="button" class="btn btn-success btn-sm" onclick="playGame();">Deal</button>'
        }
        
    })
}

