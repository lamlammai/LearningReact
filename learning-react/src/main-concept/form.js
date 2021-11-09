import React from "react";
// class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value1: "",
//             value2:"111"
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit =  this.handleSubmit.bind(this);
//     }
//     handleChange = (e)=>{
//         this.setState({
//             value1: e.target.value,
//             value2:  e.target.value
//         });
//     }
//     handleSubmit(e){
//         alert("A name was submitted: "+ this.state.value1+ this.state.value2);
//         e.preventDefault(); //ngan hanh dong mac dinh xay ra
//     }
//     render(){
//         return(
//             <>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Name:
//                         <input  type="text"
//                                 value={this.state.value1} 
//                                 onChange={this.handleChange}
//                         />
//                     </label>
//                     <input type="submit" value="Submit"/>
//                     <textarea value={this.state.value2}
//                               onChange={this.handleChange}
//                     />
//                 </form>
//             </>
//         )
//     }
// }
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: false,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
  
export default Form;
