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

function App() {
  //  <div className="App">
  /*Codigo copiad y pegado de TypeText/index.js */
  const [TextBtnWD, setTextBtnWD] = useState(true);
  
  const changeTextButton = ()=>{
    setTextBtnWD(false)
  };

  const changeToInitial = ()=>
  {
    setTextBtnWD(true)
  }
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Section-Subjects">
        <DivNosIndividual Subject="Sujeto #0001" Name="Marianela Dumas" PictureInsta="img/instagram_1.jpeg"></DivNosIndividual>
        <DivNosIndividual Subject="Sujeto #0002" Name="Axel De Martino" PictureInsta="img/instagram_2.jpeg"></DivNosIndividual>
      </div>
      <div className="App-Div">
        <img src="img/not_available.jpg" alt="logo #263"/>

        <TypeText FFont="HackedFont" TypeTag="h1" TextOriginal="Estas dispuesto a entrar?"><>
            
            </>
        </TypeText>
        <div className="Cont-Btns">
          <BotonWD Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55">
              SÍ
          </BotonWD>
          <BotonWD  FFont="Forgotten Futurist" Color="#E31075" ColorAdentro="#181E35" Tamanio="55" eventHoverOut={changeToInitial} eventHover={changeTextButton}>
            {TextBtnWD === true ? "NO" :  <TypeText TypeTag="" TextOriginal="SÍ"><></></TypeText>}
          </BotonWD>
        </div>

        <h2 className="Hacked-font">Abandona toda esperanza todo aquel que entre aqui</h2>
      </div>
    </div>
  );
}

export default App;
