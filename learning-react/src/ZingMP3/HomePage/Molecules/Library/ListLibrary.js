import ItemLibrary from "../../Atoms/ItemLibrary/ItemLibrary"
import React,{useEffect,useState} from "react";
import MenuItem from "../../Atoms/MenuItem/MenuItem";
import "./library.css";
import db from "../../FirebaseConfig";
import Vip from "../../Atoms/Vip/Vip";
function ListLibrary() {
  const [icon,setIcon] = useState([]);
  useEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    () => {
      db.collection("sidebar")
        .get()
        .then((snapshot) => {
          console.log(snapshot.docs);
          setIcon(snapshot.docs.map((e) => e.data()));
        });
    },
    []
  );
  if (icon.length === 0) return null;
  return (
    <>
      <div>
        <p className="title-library"> Thư Viện </p>
      <ul className="list list2">
          {icon[0].list2.map((item) => (
            <>
              <MenuItem key={item.id} item={item} />
            </>
          ))}
        </ul>
        <Vip/>
        <ul className="list list3">
          {icon[0].list3.map((item) => (
            <>
              <ItemLibrary key={item.id} item={item} />
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListLibrary;