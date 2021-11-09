import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Theme.css";
import db from "../../FirebaseConfig";
const icon = {
  name: "Theme",
  icon: "tshirt",
};
function Theme() {
  const ref = useRef();
  const [theme, setTheme] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const checkIfClickedOutSide = (e) => {
      if (isShow && ref.current && !ref.current.contains(e.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutSide);
    db.collection("theme")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((element) => {
          setTheme(snapshot.docs.map((e) => e.data()));
        });
        document.removeEventListener("mousedown", checkIfClickedOutSide);
      });
  }, [isShow]);

  if (theme.length === 0) return null;
  return (
    <>
      <div className="Theme-Main">
        <FontAwesomeIcon
          onClick={() => setIsShow((oldState) => !oldState)}
          className={icon.name}
          icon={icon.icon}
        />
        {isShow && (
          <>
          <div className="overlay" onClick={() => setIsShow((oldState) => !oldState)}>
          </div>
          <div className="Interface" ref={ref}>
              <div className="exit">
                <p className="Name">Giao diện</p>
                <FontAwesomeIcon
                  onClick={() => setIsShow((oldState) => !oldState)}
                  className="icon"
                  icon="times"
                />
              </div>
              {theme.map((item) => (
                <>
                  <p className="theme-title">{item.id}</p>
                  <div className="theme">
                    {item.list.map((x) => (
                      <>
                        <div className="theme-content">
                          <img className="theme-img" alt="" src={x.img} />
                          <p className="theme-text">{x.title}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Theme;
