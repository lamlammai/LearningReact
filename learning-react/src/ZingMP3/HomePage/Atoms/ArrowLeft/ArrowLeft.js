import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Arrow.css";
const ArrLeft={
    name:"Arrow",
    icon:"arrow-left"
}
function ArrowLeft() {
    return (
      <>
          <FontAwesomeIcon className={ArrLeft.name} icon={ArrLeft.icon}/>
      </>
    );
  }
  

export default ArrowLeft;