import React, {useState, useEffect} from 'react';
import '../App/index.css';
import Button from '../Button';
import Paragraph from '../Paragraph';
import Div from '../Div';
import {Grid, Col} from '../Grid';
import { Inner } from '../Inner'
import {TypeText} from '../TypeText';
import {BotonWD} from '../BotonWD';
import {NavBar} from '../NavBar';
import {DivNosIndividual} from '../DivNosIndividual';
import {Logo263} from '../Logo263';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Intro from '../../pages/Intro';
import About from '../../pages/About';
import Login from '../../pages/Login';
import Project from '../../pages/Project';
import SearchInfo from '../../pages/SearchInfo';
import Home from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import NotFoundPage  from '../../pages/404';

function App() {
  
  
  return (

    <Router>
    <Switch>
        <Route exact path="/Principal/">
          <Home />
        </Route>
        <Route exact path="/About/">
          <About />
        </Route>
        <Route exact path="/Login/">
          <Login />
        </Route>
          <Route exact path="/Project/:query">
          <Project />
        </Route>
        <Route  exact path="/SearchInfo/">
          <SearchInfo />
        </Route>
        <Route  exact path="/Dashboard/">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="">
          <NotFoundPage />
        </Route>
      </Switch>
  </Router>
        
  );
}

export default App;

/* <NavBar></NavBar>
      <div className="Section-Subjects">
        <DivNosIndividual Subject="Sujeto #0001" Name="Marianela Dumas" PictureInsta="img/instagram_1.jpeg"></DivNosIndividual>
        <DivNosIndividual Subject="Sujeto #0002" Name="Axel De Martino" PictureInsta="img/instagram_2.jpeg"></DivNosIndividual>
      </div> */