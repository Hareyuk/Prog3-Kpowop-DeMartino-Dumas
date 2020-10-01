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
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import Login from '../../pages/Login';
import Project from '../../pages/Project';
import SearchInfo from '../../pages/SearchInfo';

function App() {
  
  
  return (

    <Router>
    <Switch>
        <Route path="/About/">
          <About />
        </Route>
        <Route path="/Error/">
          <Error />
        </Route>
        <Route path="/Login/">
          <Login />
        </Route>
        <Route path="/Project/">
          <Project />
        </Route>
        <Route  path="/SearchInfo/:id">
          <SearchInfo />
        </Route>
        <Route path="/">
          <Home />
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