import React from 'react';
import "./Upload.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const upload={
    name:"Upload",
    icon:"cloud-upload-alt"
}
function Upload() {
    return (
      <>
          <FontAwesomeIcon className={upload.name} icon={upload.icon}/>
      </>
    );
  }
  

export default Upload;