function getStageWinner(matches){
    if(matches.length === 1 || matches.length == 2)
        return {winner: matches[0].winner, loser: matches[0].loser}

    let player1 = {counter: 0, name: matches[0].loser}
    let player2 = {counter: 1, name: matches[0].winner}

    matches.slice(1, matches.length).forEach(match => {
        if(match.winner == player1.name)
            player1.counter = player1.counter + 1
        else
            player2.counter = player2.counter + 1
    })
        
    if(player1.counter > player2.counter)  
        return {winner: player1.name, loser: player2.name}
    else if (player1.counter < player2.counter)
        return {winner: player2.name, loser: player1.name}
    else return null
}

module.exports = getStageWinner