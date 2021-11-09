import React, { useState } from 'react';
import CarouselIcon from '../CarouselIcon/CarouselIcon';
import "./CarouselItem.css";

function CarouselItem({item}){
        const [isShow, setIsShow]= useState(false);
        return (
            <>
                <div className="CarouselItems">
                    <a href="123" className="Carousel-link" >
                        <div className="CarouselItems-img">
                        <img 
                            alt={item.name} 
                            className="CarouselImg" 
                            src={item.img}
                            onMouseOver={()=>setIsShow(true)}
                            onMouseOut={()=>setIsShow(false)}
                        />
                        </div>
                        <p className="title">{item.name}</p>
                        <p className="text">{item.author}</p>
                    </a>
                  { isShow ?<CarouselIcon/> :null }               
                </div>
            </>
        );
}

export default CarouselItem;