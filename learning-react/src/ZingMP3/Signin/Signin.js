import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};
function SignIn() {
  return (
    <>
      <div>
        <h2>Login Form</h2>
        <p>or login with social acc</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </>
  );
}
export default SignIn;
