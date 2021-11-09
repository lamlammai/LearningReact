import React from 'react';
import ArrowLeft from "../../Atoms/ArrowLeft/ArrowLeft";
import ArrowRight from "../../Atoms/ArrowRight/ArrowRight";
import InputSearch from '../../Atoms/InputSearch/InputSearch';
import Theme from '../../Atoms/Theme/Theme';
import Upload from '../../Atoms/Upload/Upload';
import Setting from '../../Atoms/Setting/Setting';
import Avatar from "../../Atoms/Avatar/Avatar";
import "./Header.css";
class Header extends React.Component {
    render() {
        return (
            <>
            <div className="Header">
                <div className="Header-left">  
                    <ArrowLeft/>
                    <ArrowRight/>
                    <InputSearch/>
                </div>
                <div className="Header-right">
                    <Theme/>
                    <Upload/>
                    <Setting/>
                    <Avatar/>
                </div>
            </div>
            </>
        );
    }
}

export default Header;