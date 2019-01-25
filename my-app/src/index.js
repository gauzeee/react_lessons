import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/app";

// class WhoAmI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     };
//     //this.nextYear = this.nextYear.bind(this);
//   }
//   nextYear = () => {
//     this.setState(state => ({
//       years: ++state.years
//     }));
//   };
//   render() {
//     const { name, surname, link } = this.props;
//     const { years } = this.state;

//     return (
//       <>
//         <button className="btn btn-primary ml10" onClick={this.nextYear}>
//           ++
//         </button>
//         <h1>
//           My name is {name}, surname - {surname}
//         </h1>
//         <h2>{years} years old</h2>
//         <a href={link}>My Profile</a>
//       </>
//     );
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="vk.com" />
//       <WhoAmI name="Lola" surname="Smith" link="vk.com" />
//       <WhoAmI name="Abraham" surname="Downey" link="vk.com" />
//     </>
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
