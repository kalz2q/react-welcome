import React from "react";
import "./App.css";

// interface User {
//   name: string;
// }

// function Welcome(props: User) {
//   return <h1>Hello, {props.name} </h1>;
// }

// following does not work
// maybe needs constructor or something
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

const welcome = (name: string) => {
  return <h1>Hello, {name}</h1>;
};

const App = () => {
  return (
    <div className="App">
      {/* <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" /> */}
      {welcome("Sara")}
      {welcome("Cahal")}
      {welcome("Edite")}
      {welcome("Tak")}
    </div>
  );
};

export default App;
