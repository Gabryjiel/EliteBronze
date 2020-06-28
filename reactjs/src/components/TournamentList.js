import React from "react";
import useFetch from "../utilities/useFetch";

import TournamentListItem from "./TournamentListItem"

export default function TournamentList(props){

    const { data } = useFetch('tournaments', null, []);

    return (
        <div className="list-card">
            {data.map(el => {
                return <TournamentListItem key={el.name} element={el} />
            })}
        </div>
    )
}
