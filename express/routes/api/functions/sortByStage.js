exports.sortByStage = (allMatches) => {
    let matchesByStage = {}
    let matchesByStageTable = []

    for(let match of allMatches){
        if(matchesByStage[match.Stage] === undefined)
            matchesByStage[match.Stage] = {stage: match.Stage, matches: []}
        matchesByStage[match.Stage].matches.push(match)
    }

    Object.keys(matchesByStage).forEach((key, index) => {
        matchesByStageTable.push(matchesByStage[key])
    })

    let matches = matchesByStageTable.map(el => el.matches)
    let sorted = []
    matches.forEach(() => sorted.push([]))
    sorted[sorted.length - 1] = [[matches.filter(el => el[0].Stage == '3rd')[0][0]]]
    sorted[sorted.length - 2] = [[matches.filter(el => el[0].Stage == 'Final')[0][0]]]

    for(let i = matches.length - 2; i > 0; i--){
        for(let m of sorted[i]){
            for(let num of m){
                for(let t of [num.BluePlayer, num.RedPlayer]){
                    let newItem = {}
                    for(let el of matches[i - 1]){
                        if(el.Winner == t){
                            newItem = el
                            break
                        }
                    }
                    sorted[i-1].push([newItem])
                }
            }
        }
    }
    console.log(sorted[3][0][0].Stage)
    let result = []
    for(let i = 0; i < sorted.length; i++){
        result.push({
            stage: sorted[i][0][0].Stage,
            matches: sorted[i].map(el => el[0])
        })
    }

    return result
}