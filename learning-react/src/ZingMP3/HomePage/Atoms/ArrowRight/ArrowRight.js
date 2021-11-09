import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ArrRight={
    name:"Arrow",
    icon:"arrow-right"
}
function ArrowRight() {
    return (
      <>
          <FontAwesomeIcon className={ArrRight.name} icon={ArrRight.icon}/>
      </>
    );
  }
  

export default ArrowRight;