import React from "react";

function Avatar(props) {
  return(
    <>
      <img
          className="Avt"
          src={props.user.avt}
          alt={props.user.name}
      />
    </>
  )
}
function UserInfor(props) {
  return(
    <>
      <div className="UserInfor">
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    </>
  )
}
function Comment(props){
  return (
    <>
    {/* <h1>Hello,{props.name}</h1> */}
    <div className="comment">
      <UserInfor user={props.author}/>
      <div className="Coment-text">{props.text}</div>
      <div className="Coment-date">{props.date}</div>
    </div>
    </>
  );
}

const coment={
  date: new Date().toLocaleDateString(),
  text: "I hope you enjoy learing React!",
  author:{
    name: "Hello kitty",
    avt: "https://placekitten.com/g/64/64"
  },
}
function App() {
  return(
    <>
      <Comment
        date={coment.date}
        text={coment.text}
        author={coment.author}
      />
    </>
  )
}
export default App;