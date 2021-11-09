import "./PlayControl.css";
import Dongthoigian from "./song/Dongthoigian.mp3";
import Nguoiyeugiandon from "./song/Nguoiyeugiandon.mp3";
import Vanyeudaythoi from "./song/Vanyeudaythoi.mp3";
import React, { useState, useRef } from "react";
import TimeSlider from "react-input-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayRight from "../../Atoms/PlayRight/PlayRight";
import classNames from 'classnames';

const control = [
  {
    name: "video",
  },
  {
    name: "microphone-alt",
  },
  {
    name: "window-restore",
  },
  {
    name: "volume-up",
  },
  {
    name: "list-ul",
  },
];
const audios = [
  {
    src: Vanyeudaythoi,
    name: "Vẫn Yêu đấy thôi",
    isPlay: false,
    img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/1/7/c/517ca58e0bb720d2e469e96259ef2bdd.jpg",
    singers: "Chi dan",
  },
  {
    src: Dongthoigian,
    name: "Vẫn Yêu đấy thôi",
    isPlay: false,
    img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/5/4/2/3542386e138893792cd904405d6a4190.jpg",
    singers: "12",
  },
  {
    src: Nguoiyeugiandon,
    name: "Vẫn Yêu đấy thôi",
    isPlay: false,
    img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/f/2/d/5f2d9c8e7e39c0776a254980a26ec63d.jpg",
    singers: "12",
  },
];

const App = () => {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [SongActive, setSongActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
      setSongActive(!SongActive);
    } else {
      audioRef.current.play();
      setSongActive(!SongActive);
      
    }
    setPlay(!isPlay);
  };
  const handleLoopClick = () => {
    setDuration(audioRef.current.duration);
    audioRef.current.play();
  };
  const handleRandomPlayClick= ()=>{
    const rand = Math.random() %audios.length;
    setAudioIndex((rand))
  }
  const handlePreClick = () =>{
    if (audioIndex - 1 < 0) {
      setAudioIndex((audioIndex + 2) % audios.length);
    } else {
      setAudioIndex((audioIndex - 1) % audios.length);
    }
  }
  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);
    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="App">
      <div className="Song-Left">
        {/* <PlaySong className={classNames({SongActive: SongActive})} audios={audios[audioIndex]} /> */}
        <img className={classNames("Song-Thumbnail",{SongActive: SongActive})} src={audios[audioIndex].img} alt="sing-img" />
            <div className="Song-Title">
                <h2 className="Song-Title">{audios[audioIndex].name}</h2>
                <p className="Singer">{audios[audioIndex].singers}</p>
            </div>
      </div>
      <div className="Song-Button">
        <div className="Control-Button-Group">
        <div
            className="Random-Button"
            onClick={handleRandomPlayClick}
          >
            <FontAwesomeIcon className="btn-active" icon="random" />
          </div>
          <div
            className="Prev-Button"
            onClick={handlePreClick}
          >
            <FontAwesomeIcon className="btn-active" icon="backward" />
          </div>
          <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
            {isPlay ? (
              <FontAwesomeIcon className="btn-active" icon="pause-circle" />
            ) : (
              <FontAwesomeIcon className="btn-active" icon="play-circle" />
            )}
          </div>
          <div
            className="Next-Button"
            onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
          >
            <FontAwesomeIcon className="btn-active" icon="forward" />
          </div>
          <div
            className="Loop-Button"
            onClick={handleLoopClick}
          >
            <FontAwesomeIcon className="btn-active" icon="retweet" />
          </div>
        </div>
        <div className="Control-Song-Active">
          <span className="TextTime" onChange={handleTimeSliderChange}>00:01</span>
             <TimeSlider
          className={"TimeLine"}
          axis="x"
          xmax={duration}
          x={currentTime}
          onChange={handleTimeSliderChange}
          styles={{
            track: {
              backgroundColor: "#948a8a",
              height: "2px",
            },
            active: {
              backgroundColor: "#fff",
              height: "2px",
            },
            thumb: {
              display: "none",
            },
          }}
        /> 
        <span className="TextTime">05:49</span>
        </div>
        
      </div>
      <div className="Song-Left">
        {control.map((audio) => (
          <PlayRight audio={audio} />
        ))}
      </div>
      <audio
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData = {handleLoadedData}
        onTimeUpdate = {() => setCurrentTime(audioRef.current.currentTime)}
        onEnded = {() => setAudioIndex((audioIndex + 1) % audios.length)}
        loop={handleLoopClick}
      />
    </div>
  );
};

export default App;
