function convertBetConfig(betConfig){
    let finalConfig = [];
    const chipVals =[[500, 'five-hundred'], [100, 'one-hundred'], [50, 'fifty'], 
                     [25, 'twenty-five'], [10, 'ten'], [5, 'five'], [2.50, 'two-fifty']]
    for(pos of betConfig){
        if (pos == 0){
            finalConfig.push([false, 0])}
        else{
            for(val of chipVals){
                if(pos%val[0] == 0){
                    num = pos/val[0]
                    const pair = [val[1], num]
                    finalConfig.push(pair)
                    break
                    }
                }
        }
    }
    return finalConfig
}


function convertDrag(bet){
    if (bet=='two-fifty'){
        return 2.50
    }
    if (bet=='five'){
        return 5
    }
    if (bet=='ten'){
        return 10
    }
    if (bet=='twenty-five'){
        return 25
    }
    if (bet=='fifty'){
        return 50
    }
    if (bet=='one-hundred'){
        return 100
    }
    if (bet=='five-hundred'){
        return 500
    }
}