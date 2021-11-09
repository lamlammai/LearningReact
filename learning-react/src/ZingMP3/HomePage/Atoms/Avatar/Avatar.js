import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Avatar.css";
import firebase from "firebase";
const avt = {
  name: "Avatar",
  icon: "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-21.jpg",
  icon2:"https://anhdep123.com/wp-content/uploads/2021/05/hinh-avatar-trang.jpg",
};
function Avatar() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  if (!isSignedIn) {
    console.log("dang nhap" );
    return (
      <>
        <Link to="/Signin">
          <img alt={avt.name} className={avt.name} src={avt.icon2} />
        </Link>
      </>
    );
  }
  console.log("dang xuat" );
  return (
    <>
        <img alt={avt.name} className={avt.name} src={avt.icon} onClick={() => firebase.auth().signOut()}/>
    </>
  );
}

export default Avatar;
