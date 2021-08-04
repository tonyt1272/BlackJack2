async function fetchBoot() {
    await sendHttpRequest('GET', 'http://localhost:5000/api_get_cards').then(responseData => {
        servedBoot = responseData;
    })
}

function getRandomArbitrary(min, max) {
    //Returns a random number between min (inclusive) and max (exclusive)
    return Math.random() * (max - min) + min;
}


function getRandomInt(min, max) {
    //  Returns a random integer between min (inclusive) and max (inclusive).
    //  The value is no lower than min (or the next integer greater than min
    //  if min isn't an integer) and no greater than max (or the next integer
    //  lower than max if max isn't an integer).
    //  Using Math.round() will give you a non-uniform distribution!
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countProperties(obj) {
    //Returns the Length (number of keys) of an Object
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }
    return count;
}


function range(start, stop, step) {
    //Just like Python range()
    if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
    }
    if (typeof step == 'undefined') {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};


function shuffle(array) {
    // Returns a Shuffled version of an array
    var currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  

const cardValues = {'a': 1, 
                    'b': 2, 
                    'c': 3, 
                    'd': 4, 
                    'e': 5, 
                    'f': 6, 
                    'g': 7, 
                    'h': 8, 
                    'i': 9, 
                    'j': 10, 
                    'k': 10, 
                    'l': 10, 
                    'm': 10}



function newDeck() {
    // Key = integer value
    // Value = card file name
    // 1: Spades, 2: Clubs, 3: Hearts, 4: Diamonds
    // a: ace, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: Jack, l: Queen, m: King
    const valueInts = range(1,53);
    const spades = ['1a.png','1b.png','1c.png','1d.png','1e.png','1f.png','1g.png','1h.png','1i.png','1j.png','1k.png','1l.png','1m.png']
    const clubs = ['2a.png','2b.png','2c.png','2d.png','2e.png','2f.png','2g.png','2h.png','2i.png','2j.png','2k.png','2l.png','2m.png']
    const hearts = ['3a.png','3b.png','3c.png','3d.png','3e.png','3f.png','3g.png','3h.png','3i.png','3j.png','3k.png','3l.png','3m.png']
    const diamonds = ['4a.png','4b.png','4c.png','4d.png','4e.png','4f.png','4g.png','4h.png','4i.png','4j.png','4k.png','4l.png','4m.png']
    const cards = spades.concat(clubs).concat(hearts).concat(diamonds)
    var a = valueInts;
    var b = cards
    const freshDeck= a.map(function(e,i) {
    return [e, b[i]];
    });
    const deck={};
    for (card of freshDeck){
        deck[card[0]] = card[1]
    }
    return deck
}



// Boot type 1:  Hand shuffle reset at between 50% to 75% (randomized) of the
// (5 or 6) deck boot.
// Boot type 2:  Continuous shuffle reset at between 5% to 10% cards from an 
// (5 or 6) deck boot.
class Boot{
    a; //min reshuffle
    b; //max reshuffle
    size;   // number of decks in boot
    splitCard;  // integer location (value) of the splitCard
    shuffleNextRound = false; // boolean 
    cards;  // array of integer values [1...52] representing playing cards, transform to cards using deck object, deck[num] -> card
    dealt = 0;  // number of cards that have left the boot
    stack = 1;  // discard stack height
    constructor(size=6,a=.4,b=.75){
        this.size = size;
        // let cards = range(1,53);

        let boot = [...servedBoot];
        // for(let i = 0; i<size; i++){
        //     boot = boot.concat(cards);
        // }
        this.cards = boot;
        this.a = a;
        this.b = b;
    }

    nextCard(){
        this.dealt+=1;
        if (this.dealt >= this.splitCard){
            this.shuffleNextround = true;
        }
        return this.cards.shift()
    }

    placeSplitCard(){
        let min = Math.round(this.size*52*this.a)
        let max = Math.round(this.size*52*this.b)
        this.splitCard = getRandomInt(min, max)
    }   // chooses index of the cut card

    shuffle(array = this.cards){
        var currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        this.cards = array
        this.placeSplitCard()
    }
    getSize(){
        return this.size
    }
}






// boot = new Boot()
// boot.shuffle()

// console.log(boot.cards)




