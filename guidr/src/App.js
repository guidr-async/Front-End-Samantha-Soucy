import React, { Component } from 'react';
import {Route} from "react-router"
import './App.css';

import LoginView from "./views/LoginView"
import SignUpView from "./views/SignUpView"
import HomePageView from "./views/HomePageView"
import PortfolioPageView from "./views/PortfolioPageView"
import AddInfoView from "./views/AddInfoView"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={LoginView} />
        <Route path="/signUp" component={SignUpView} />
        <Route path="/homePage" component={HomePageView} />
        <Route path="/portfolio/:id" component={PortfolioPageView} />
        <Route path="/addInfo" component={AddInfoView} />
        
      </div>
    );
  }
}

export default App;
