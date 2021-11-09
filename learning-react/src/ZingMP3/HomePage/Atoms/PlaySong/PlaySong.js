import React from "react";
import "./PlaySong.css"
function PlaySong({audios}){
    return(
        <>
            <img className="Song-Thumbnail" src={audios.img} alt="sing-img" />
            <div className="Song-Title">
                <h2 className="Song-Title">{audios.name}</h2>
                <p className="Singer">{audios.singers}</p>
            </div>
        </>
    )
}
export default PlaySong;