import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const logo = {
  name: "Zing MP3",
  avatarUrl:
    "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg",
};
function Logo() {
  return (
    <Link to="/">
      <div className="LogoZing">
        <img className="Logo" src={logo.avatarUrl} alt={logo.name} />
      </div>
    </Link>
  );
}

export default Logo;
