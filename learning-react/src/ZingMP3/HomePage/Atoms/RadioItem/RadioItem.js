import React, { useState } from 'react';
import "./RadioItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function RadioItem({item}){
        const [isShow, setIsShow]= useState(false);
        return (
            <>
                <div className="RadioItem">
                    <a href="123" className="Radio-link" >
                        <div className="Radio-img" 
                            onMouseOver={()=>setIsShow(true)}
                            onMouseOut={()=>setIsShow(false)}>
                        <img 
                            alt={item.name} 
                            className="RadioImg" 
                            src={item.img}
                            
                        />
                        <img 
                            alt={item.name} 
                            className="RadioImgIcon" 
                            src={item.avt}
                        />
                        </div>
                        <p className="title-icon title ">{item.author}</p>
                        <p className="text-icon text ">{item.listening}</p>
                    </a>
                  { isShow ? <FontAwesomeIcon className="Radio-icon" icon="play"/>:null }               
                </div>
            </>
        );
}

export default RadioItem;