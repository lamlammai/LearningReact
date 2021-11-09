import React from 'react';
import "firebase/firestore";
  // import { collection, getDocs } from "firebase/firestore"; 
  import "firebase/auth";
  import db from "./FirebaseConfig"

function Test(){
  db.collection("history").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    console.log(doc.id,"-", doc.data().author,"-", doc.data().name);
    });
});
 return(
  <div></div>
 ) 
}

export default Test;