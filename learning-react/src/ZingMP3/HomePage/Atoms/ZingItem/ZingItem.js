import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ZingItem.css"
function ZingItem({song}){
    return(
        <>
            <li className="ZingItem">
                <a href="123" className="ZingItem-link">
                    <p className="id">{song.id}</p>
                    <img 
                        alt={song.song} 
                        className="ZingImg" 
                        src={song.img}
                    />
                    <FontAwesomeIcon className="ZingItemIcon" icon="play"/>
                    <div className="infoSong">
                        <p className="ZingSong">{song.song}</p>
                        <p className="ZingSinger">{song.singer}</p>
                    </div>
                </a>
            </li>
        </>
    )
}
export default ZingItem;