import React from "react";
import "./CarouselMusic.css";
import CarouselSongNew from "../../Atoms/CarouselSongNew/CarouselSongNew";
import CarouselSongSuggestions from "../../Atoms/CarouselSongSuggestions/CarouselSongSuggestions";
import CarouselSongRadio from "../../Atoms/CarouselSongRadio/CarouselSongRadio";
function CarouselMusic() {
  return (
    <>
      <CarouselSongSuggestions/>
      <CarouselSongNew />
      <CarouselSongRadio/>
    </>
  );
}

export default CarouselMusic;
