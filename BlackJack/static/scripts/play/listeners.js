// --------------Start Bet Event Listeners
playerBank0EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip5, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'copyMove';
    drag_bet_g = 'five';
});

playerBank1EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip10, 34, 31);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'ten';
});

playerBank2EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip25, 34, 31);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'twenty-five';
});

playerBank3EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip50, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'fifty';
});

playerBank4EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip100, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'one-hundred';
});

playerBank5EL.addEventListener("dragstart", ev =>{
    ev.dataTransfer.setDragImage(chip500, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'five-hundred';
});

playerBank6EL.addEventListener("dragstart", ev =>{
   ev.dataTransfer.setDragImage(chip500, 34, 32);
    // console.log(ev.target.id)
    // ev.dataTransfer.setData("text/plain", ev.target.id);
    // ev.dataTransfer.effectAllowed = 'move';
    drag_bet_g = 'five-hundred';
});


// --------------Center Bet 
// position 2
playerCbet2EL.addEventListener("dragover", ev => {
    ev.preventDefault();
    playerCOutlineEL.classList.add('droppable')
});

playerCbet2EL.addEventListener("dragleave", ev => {
    ev.preventDefault();
    if (!bet_status.CB2[0]){
        playerCbet2EL.classList.replace('show','hide');
    }
    playerCOutlineEL.classList.remove('droppable')
});

playerCbet2EL.addEventListener("drop", ev => {
    ev.preventDefault();
    setBet(drag_bet_g, playerCbet2EL)
    playerCOutlineEL.classList.remove('droppable')
});


// ----------------Left Bet
// position 2
playerLbet2EL.addEventListener("dragover", ev => {
    ev.preventDefault();
    playerLOutlineEL.classList.add('droppable')
});

playerLbet2EL.addEventListener("dragleave", ev => {
    ev.preventDefault();
    if (!bet_status.LB2[0]){
        playerLbet2EL.classList.replace('show','hide');
    }
    playerLOutlineEL.classList.remove('droppable')
});

playerLbet2EL.addEventListener("drop", ev => {
    ev.preventDefault();
    setBet(drag_bet_g,playerLbet2EL)
    playerLOutlineEL.classList.remove('droppable')

});


// ----------------Right Bet
// position 2
playerRbet2EL.addEventListener("dragover", ev => {
    ev.preventDefault();
    playerROutlineEL.classList.add('droppable')
});

playerRbet2EL.addEventListener("dragleave", ev => {
    ev.preventDefault();
    if (!bet_status.RB2[0]){
        playerRbet2EL.classList.replace('show','hide');
    }
    playerROutlineEL.classList.remove('droppable')
});

playerRbet2EL.addEventListener("drop", ev => {
    ev.preventDefault();
    setBet(drag_bet_g,playerRbet2EL)
    playerROutlineEL.classList.remove('droppable')

});


// document.addEventListener('scroll',centerWindow)

window.addEventListener('load', (event) => {
    // window.scrollTo({
    //     top: document.body.scrollHeight,
    //     // left: 0,
    //     behavior: 'smooth'
    //   })
    

    // setTimeout(()=>{
    // },0)

    document.body.setAttribute('id','play-background');
    document.getElementById("exampleModalCenter").classList.replace("show","hide")
    document.getElementById("exampleModalCenter").style.display = "none";
     
    document.getElementById('main-window').style.display = 'block';
    document.body.removeChild(myModal);
    $('link[rel=stylesheet][href~="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"]').remove();
    
    playerBank3EL.scrollIntoView({
    // behavior: "smooth" ,
    block: "center" ,
    inline: "center",
    });

});

