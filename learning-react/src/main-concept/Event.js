import React from 'react';

class Event extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = ()=>{
        console.log("this í: ", this);
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    shoot = (a,b) => {
        alert(a+b);
        alert(b.type);
        alert("Hi , My name Event React!");
    }
    form = ()=>{
        alert("submit thanh cong");
        
    }    
    render() {
        return (
            <>
                <button onClick={(ev)=> this.shoot("Lam xinh",ev)}>Click Me!</button>
                {/* hoac co the su dung ham bind() */}
                {/* <button onClick={this.shoot.bind(this, "Lamlam","xinh gai")}>Click!</button> */}
                <form onClick={()=>this.form()}>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={()=>this.handleClick()}>
                    {this.state.isToggleOn? 'ON':'OFF'}
                </button>
            </>
        );
      }
}
// function shoot() {
//     alert("Great Shot!");
//   }
  
// //   const myelement = (
// //     <button onClick={shoot}>Take the shot!</button>
// //   );
// function element(){
//     return(
//         <>
//         <button onClick={shoot}>Take the shot!</button>
//         </>
//     )
// }
export default Event;