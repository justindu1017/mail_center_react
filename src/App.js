import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style/style.scss";
import NavBar from "./Components/NavBar/NavBar";
import MailContainer from "./Components/mailContainer/MailContainer";
import MailPage from "./Components/mailContentPage/MailPage";
import WriteMail from "./Components/writeMail/WriteMail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route path="/" exact component={MailContainer} />
            <Route path="/writemail" exact component={WriteMail} />
            <Route path="/trash" exact component={WriteMail} />
            <Route path="/:id" component={MailPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
