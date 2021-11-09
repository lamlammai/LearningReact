import React from "react";
import "./Partner.css";
import PartnerItem from "../../Atoms/PartnerItem/PartnerItem";
function Partner(){
    const partners=[
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"},
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/monstercat.png"},
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"},
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"},
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"},
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"},
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"},
        {img: "https://static-zmp3.zadn.vn/skins/zmp3-v6.1/images/partner_logo/orcahrd.png"},

    ]
    return(
        <div className="Parter">
            <p className="TitleParter">
                Doi tac Am nhac
            </p>
            <div className="ParterMain">
                {
                partners.map(partner=>(
                    <PartnerItem partner={partner}/>
                ))
                }
            </div>
            
        </div>
    )

}
export default Partner;