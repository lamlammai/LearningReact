// import Gallery from "../Gallery/Gallery";
import React from 'react';
import Banner from '../../Atoms/Banner/Banner';
import CarouselSongNew from '../../Atoms/CarouselSongNew/CarouselSongNew';
import NewRelease from '../../Atoms/NewRelease/NewRelease';
import Singer from '../../Atoms/Singer/Singer';
import Slide from '../../Atoms/Slide/Slide';
import CarouselMusic from '../../Molecules/CarouseMusic/CarouselMusic';
import Partner from '../../Molecules/Partner/Partner';
import ZingChart from '../../Molecules/ZingChart/ZingChart';
import "./Content.css";
class Content extends React.Component {
    render() {
        return (
            <>
               {/* <Gallery/>  */}
               <div className="content">
               <Slide/>
               <CarouselMusic/>
               <ZingChart/>
               <Banner/>
               <Singer/>
               <CarouselSongNew/>
               <NewRelease/>
               <Partner/>
             </div>
            </>
        );
    }
}
export default Content;