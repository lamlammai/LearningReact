import React from "react";

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }

//   render() {
//     return (
//       <>
//         <h2>Hi , i am a {this.state.color} car!</h2>
//       </>
//     );
//   }
// }

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      color: "red"
    };
  }

  componentDidMount(){
    this.timeID = setInterval(
      ()=> this.setState(
            {
              date:new Date(),
              color: "yellow"
            }
          )
    ,1000);
  }

  componentWillUnmount(){
    clearInterval(this.timeID);
  }

  render() {
    return (
      <div>
          <h1>Hello, World!,{sum()}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
          <p>color: {this.state.color}</p>
      </div>
    );
  }
}
function sum(){
      return 3;
    }
// function Car() {
//   return( <h2>Hi, i am car!</h2>)
// }

export default Clock;