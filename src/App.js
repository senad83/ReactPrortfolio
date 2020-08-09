import React from 'react';
import logo from './logo.svg';
import { Switch, Route, useHistory } from "react-router-dom";
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      
    <Header/>
      
      <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/portfolio">
          <Portfolio/>
          </Route>
          <Route exact path="/contact">
          <Contact/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
