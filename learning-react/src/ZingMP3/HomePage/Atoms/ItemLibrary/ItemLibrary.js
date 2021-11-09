import React from "react";
import "./ItemLibrary.css";
import { Link } from "react-router-dom";
function ItemLibrary({ item }) {
  return (
    <>
      <li className="itemLibrary">
        <Link to={item.id} className="item-librarylink">
          <img alt="img" className="icon-library" src={item.icon} />
          <span className="text-library">{item.title}</span>
        </Link>
      </li>
    </>
  );
}

export default ItemLibrary;
