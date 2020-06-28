const getStageWinner = require('./getStageWinner')

function getPodium(tours){
    let toursById = {}
    let toursByIdByStage = {}
    let toursStandings = {}
    let toursResults = []
    
    for(let el of tours){
      if(toursById[el.id] === undefined)
        toursById[el.id] = []
      toursById[el.id].push(el)
    }
      
    Object.keys(toursById).forEach(function(key,index) {
        const tour = toursById[key]
        
        for(let el of tour){
          if(toursByIdByStage[el.id] === undefined)
            toursByIdByStage[el.id] = {}
          if(toursByIdByStage[el.id][el.stage] === undefined)
            toursByIdByStage[el.id][el.stage] = []
          toursByIdByStage[el.id][el.stage].push(el)
        }
    })
  
    Object.keys(toursByIdByStage).forEach(function(key,index) {
      Object.keys(toursByIdByStage[key]).forEach(function(key2,index2) {
        let results = getStageWinner(toursByIdByStage[key][key2])
        
        if(toursStandings[key] === undefined)
          toursStandings[key] = {}
        
        if(key2 == 'Final'){
          toursStandings[key].first = results.winner
          toursStandings[key].second = results.loser
        }
        else if(key2 == '3rd'){
          toursStandings[key].third = results.winner
          toursStandings[key].fourth = results.loser
        }
      })
    })
    
    Object.keys(toursById).forEach(function(key,index) {
      let el = toursById[key][0]
      delete el.winner
      delete el.stage
      delete el.loser
      let el2 = 
      toursResults.push({...el, ...toursStandings[key]})
    })
    
    return toursResults
}

module.exports = getPodium