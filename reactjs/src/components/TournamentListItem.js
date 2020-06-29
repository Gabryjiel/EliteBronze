import React from 'react'

import {ReactComponent as Trophy} from "../icons/trophy.svg"

export default function TournamentListItem({element, goTo}){

    return(
        <div className="list-card-item">
            <div className="list-card-item-image" onClick={() => goTo(`/tournaments/${element.id}`)}>
                {element.image && <img alt="" src={element.image}/>}
                {!element.image && <div style={{background: "black", height: "100%", width: "100%"}}></div>}
            </div>
            <div className="list-card-item-title" onClick={() => goTo(`/tournaments/${element.id}`)}>
                {element.name}
            </div>
            <div className="list-card-item-aside">
                {element.enddate ?
                    <>
                        <div>
                            <Trophy onClick={() => goTo('/stats')} fill="goldenrod"/>
                            <span onClick={() => goTo('/')}>{element.first}</span>
                        </div>
                        <div>
                            <Trophy onClick={() => goTo('/stats')} fill="silver"/>
                            <span onClick={() => goTo('/')}>{element.second}</span>
                        </div>
                        <div>
                            <Trophy onClick={() => goTo('/stats')} fill="#F06C00"/>
                            <span onClick={() => goTo('/')}>{element.third}</span>
                        </div>
                    </>
                : 
                    <div>Aktywny</div>}
            </div>
            <div className="list-card-item-details" onClick={() => goTo(`/tournaments/${element.id}`)}>
                {element.enddate ?
                    <>
                        Data zakończenia: {element.enddate.slice(0,element.enddate.indexOf('T'))}
                    </> :
                    <>
                        Aktywny
                    </>
                }
            </div>
        </div>
    )
}