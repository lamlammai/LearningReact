import React, {useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../../FirebaseConfig";
import "./InputSearchItem.css";
function InputSearchItem() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    db.collection("search")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((element) => {
          setSearch(snapshot.docs.map((e) => e.data()));
        });
      });
  }, []);
  if (search.length === 0) return null;
  return (
    <>
      <ul className="ListSearch">
        {search.map((item) => (
          <li key={item.id}>
            <a href="123" className="item-link">
              <FontAwesomeIcon className="icon" icon={item.icon} />
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default InputSearchItem;
