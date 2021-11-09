import React from "react";
import "./Banner.css";
const banner = [
    {
        id:1,
        img:"https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg",
    },
    {
        id:2,
        img:"https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/web_song_usuk.jpg",
    },
    {
        id:3,
        img:"https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg",
    },
];
function Banner(){
    return (
        <ul className="Banner">
            {
            banner.map(item =>(
                <li className="BannerItem">
                    <img alt="" key={item.id} src={item.img}/>
                </li>
            ))
            }
        </ul>
    )
}
export default Banner;
