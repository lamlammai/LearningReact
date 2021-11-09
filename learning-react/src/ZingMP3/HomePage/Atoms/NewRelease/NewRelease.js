import Pagination from "../Pagination/Pagination";
import React from "react";
import "./NewRelease.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Release = {
  title: "Mới Phát Hành",
  list: [
    {
      top: "#1",
      time: "02.10.2021",
      author: "Bích Phương",
      song: "Vâng anh đi đi",
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/0/f/8/50f8303c0ed3c86162c65910fb1dceec.jpg",
    },
    {
        top: "#1",
        time: "02.10.2021",
        author: "Bích Phương",
        song: "Vâng anh đi đi",
        img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/0/f/8/50f8303c0ed3c86162c65910fb1dceec.jpg",
      },
      {
        top: "#1",
        time: "02.10.2021",
        author: "Bích Phương",
        song: "Vâng anh đi đi",
        img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/0/f/8/50f8303c0ed3c86162c65910fb1dceec.jpg",
      }
  ],
};
function NewRelease() {
  return (
    <>
    <div className="NewReleaseTitle">
        <p className="NewReleaseText">{Release.title}</p>
        <Pagination/>
    </div>
    
      <div className="NewRelease">
        {Release.list.map((item) => (
          <>
            <div className="NewReleaseItem">
                <div className="NewReleaseItemImg" >
                    <img alt="" className="NewReleaseImg" src={item.img}></img>
                </div>
              <div className="NewReleaseTop">
                <div className="NewReleaseSongMain">
                  <p className="NewReleaseSong">{item.song}</p>
                  <p className="NewReleaseSinger">{item.author}</p>
                </div>
                <div className="NewReleaseSongSubMain">
                  <p className="NewReleaseNumber">{item.top}</p>
                  <p className="NewReleaseTime">{item.time}</p>
                </div>
              </div>
              <FontAwesomeIcon className="NewReleasePlay" icon="play" />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default NewRelease;
