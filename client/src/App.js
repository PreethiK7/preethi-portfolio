import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Skills from "./Pages/Skills"
import Contact from "./Pages/Contact"
import MyWork from "./Pages/MyWork"
import About from "./Pages/About"
import Home from "./Pages/Home";

function App() {
  return (
      <Switch>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Skills" component={Skills}/>
          <Route exact path="/MyWork" component={MyWork}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Home" component={Home}/>
          <Route path="/" component={About}/>
      </Switch>
  );
}

export default App;
