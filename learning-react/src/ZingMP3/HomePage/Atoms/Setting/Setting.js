import React from 'react';
import "./Setting.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const setting={
    name:"Setting",
    icon:"cog"
}
function Theme() {
    return (
      <>
          <FontAwesomeIcon className={setting.name} icon={setting.icon}/>
      </>
    );
  }
  

export default Theme;