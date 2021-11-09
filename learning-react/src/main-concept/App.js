// others
import "./App.scss";
import React from "react";

//  2/jsx
function formatName(user) {
  return (`${user.firstName} ${user.lastName}`);
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl: "https://www.bing.com/th?id=Adfa164bd1b354cd4d268c287faf07809&w=110&h=110&c=7&rs=1&qlt=80&o=6&dpr=1.25&pid=SANGAM"
};
// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );
function getGreeting(user) {
  if (user) {
    return <h1>Hello, Stranger.</h1>;
  }
  return <h1>Hello, {formatName(user)}!</h1>;
}
// const element = <img src={user.avatarUrl} alt= ""></img>;
// const element = <button type="button" tabIndex={0}/>;
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
export default getGreeting(user);