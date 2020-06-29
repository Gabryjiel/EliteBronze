import React from "react";
import { useHistory } from 'react-router-dom'
import useFetch from "../utilities/useFetch";

import TournamentListItem from "./TournamentListItem"

export default function TournamentList(props){

    const { data } = useFetch('tournaments', null, []);
    const history = useHistory()

    const goTo = path => {
        history.push(path)
    }

    return (
        <div className="list-card">
            {data.map(el => {
                return <TournamentListItem key={el.name} element={el} goTo={goTo} />
            })}
        </div>
    )
}
