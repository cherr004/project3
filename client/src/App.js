import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import Account from "./pages/Account"
import Nav from "./components/Nav";
import Registration from "./components/Registration";
import './Account.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Registration />
        </div>
      </Router>
    );
  }
}

export default App;
