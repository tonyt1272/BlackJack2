function convertBetConfig(betConfig){
    let finalConfig = [];
    // special chipVals contain a decimal, thi is used the the loop below to determin which stacks are prebuilt 
    const chipVals =[[500, 'five-hundred'], [100, 'one-hundred'], [95.0, 'ninety-five'], [90.0, 'ninety'], [87.50, 'eighty-seven-fifty'], 
                    [85.0, 'eighty-five'], [80.0, 'eighty'], [70.0, 'seventy'], [65.0, 'sixty-five'],[62.50, 'sixty-two-fifty'], [55.0, 'fifty-five'], 
                    [50, 'fifty'],[45.0, 'forty-five'], [37.50,'thirty-seven-fifty'], [35.0,'thirty-five'], [25, 'twenty-five'], 
                    [12.50, 'twelve-fifty'], [10, 'ten'], [7.50, 'seven-fifty'], [5, 'five'], [2.50, 'two-fifty']]

    for(pos of betConfig){
        if (pos == 0){
            finalConfig.push([false, 0])}
        else{
            for(val of chipVals){
                //
                if(pos%val[0] == 0){
                    let num = pos/val[0]
                    if (num > 1 && val[0].toString().includes('.')){
                        continue
                    }else{
                        const pair = [val[1], num]
                        finalConfig.push(pair)
                        break
                    }
                    }
                }
        }
    }
    return finalConfig
}


function convertDrag(bet){
    // if (bet=='two-fifty'){
    //     return 2.50
    // }
    if (bet=='five'){
        return 5
    }
    // if (bet=='seven-fifty'){
    //     return 7.50
    // }
    if (bet=='ten'){
        return 10
    }
    // if (bet=='twelve-fifty'){
    //     return 12.50
    // }
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