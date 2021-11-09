import Button from '../Button/Button';
import React from 'react';
import "./Vip.css"
class Vip extends React.Component {
    render() {
        return (
            <>
               <div className="Vip">
                   <p className="text-vip">Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                   <Button/>
                </div> 
            </>
        );
    }
}

export default Vip;