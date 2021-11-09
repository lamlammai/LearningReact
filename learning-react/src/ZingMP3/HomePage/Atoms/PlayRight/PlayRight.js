import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PlayRight.css";
function PlayControlItem({audio}){
    return(
        <>
            <button className="btn-right"><FontAwesomeIcon className="icon-active-right" icon={audio.name}/></button>
        </>
    )
}
export default PlayControlItem;