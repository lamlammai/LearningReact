import MenuItem from "../../Atoms/MenuItem/MenuItem";
import React,{useEffect,useState} from "react";
import "./style.css";
import db from "../../FirebaseConfig";

function Menu() {
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
        <ul className="list">
          {icon[0].list1.map((item) => (
            <>
              <MenuItem key={item.id} item={item} />
            </>
          ))}
        </ul>
        
      </div>
    </>
  );
}

export default Menu;
