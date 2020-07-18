import React from "react";
import { useHistory } from "react-router-dom";

export default function Header (props){

    const history = useHistory()
    const goTo = path => {
        history.push(path);
    }

    return(
        <ul className="header">
            <li className="header-item" onClick={() => goTo('/')}>Home</li>
            <li className="header-item-grow"></li>
            <li className="header-item" onClick={() => goTo("/tournaments")}>Turnieje</li>
            <li className="header-item" onClick={() => goTo('/stats')}>Statystyki</li>
            {/* <li className="header-item" onClick={() => goTo('/profile')}>Profil</li> */}
        </ul>
    )
}