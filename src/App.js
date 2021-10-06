import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/style.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
