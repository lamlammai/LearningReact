import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { Link} from "react-router-dom";
function MenuItem({ item }) {
  return (
    <>
      <li className="listItems">
        <Link className="item-link" to={item.id}>
          <FontAwesomeIcon className="icon" icon={item.icon} />
          <span className="text">{item.title}</span>
        </Link>
      </li>
    </>
  );
}

export default MenuItem;
