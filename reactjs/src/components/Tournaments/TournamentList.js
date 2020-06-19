import React from "react";
import useFetch from "../../utilities/useFetch";

export default function TournamentList(props){

    const { data } = useFetch('tournaments', null, []);

    return (
        <div style={{height: "300px"}}>
            {data.map(el => {
                return <li key={el.name}>{el.name}</li>
            })}
        </div>
    )
}
