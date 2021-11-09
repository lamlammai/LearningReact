import React from "react";
import "./PartnerItem.css";
function PartnerItem({partner}){
    return(
        <div className="PartnerItem">
            <img alt="ItemImg" className="PartnerItemImg" src={partner.img}/>
        </div>
    )
}
export default PartnerItem;