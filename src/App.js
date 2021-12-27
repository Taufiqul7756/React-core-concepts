import logo from "./logo.svg";
import "./App.css";
import reactDom from "react-dom";

function App() {
  var person ={
    name: "dr. Mahfuz",
    job: "Singer"
  }

  var person2 ={
    name: "Eva Rahman",
    job: "Singer"
  }

  var style ={
    color: 'red',
    backgroundColor:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={style} >1. Popular Singer: {person.name + " " + person.job} </h3>
        <h3 style={{color: 'black', background: 'yellow'}}>2. Popular Singer: {person2.name + " " + person2.job} </h3>
      </header>
    </div>
  );
}

export default App;
