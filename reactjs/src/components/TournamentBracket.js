import React from 'react'

import useFetch from '../utilities/useFetch'
import { useParams } from 'react-router-dom'

export default function TournamentBracket(props){

    const { id } = useParams()
    const { data } = useFetch(`tournaments/${id}`)

    return(
        <div className="list-brackets">
            {data && data.map(stage => 
                <div className="list-brackets-col">
                    <div className="list-brackets-col-title">{stage.stage}</div>
                    <div className="list-brackets-col-items">
                        {stage.matches.map(match => 
                         <div className="list-brackets-col-item">
                                <div className="list-brackets-col-item-blue">
                                    {match.BluePlayer}
                                </div>
                                <div className="list-brackets-col-item-red">
                                    {match.RedPlayer}
                                </div>
                        </div>)}
                    </div>
                </div>
            )}
        </div>
    )
}