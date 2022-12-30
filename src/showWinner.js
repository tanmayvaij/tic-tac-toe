export const showWinner = (blocks, p) => {

    const res = { win: true, player: p }

    if ( blocks["1"] == p && blocks["5"] == p && blocks["9"] == p ) res
    
    else if ( blocks["3"] == p && blocks["5"] == p && blocks["7"] == p ) return res

    else if ( blocks["1"] == p && blocks["2"] == p && blocks["3"] == p ) return res

    else if ( blocks["4"] == p && blocks["5"] == p && blocks["6"] == p ) return res

    else if ( blocks["7"] == p && blocks["8"] == p && blocks["9"] == p ) return res

    else if ( blocks["1"] == p && blocks["4"] == p && blocks["7"] == p ) return res

    else if ( blocks["2"] == p && blocks["5"] == p && blocks["8"] == p ) return res

    else if ( blocks["3"] == p && blocks["6"] == p && blocks["9"] == p ) return res

    return { win: false }

}
