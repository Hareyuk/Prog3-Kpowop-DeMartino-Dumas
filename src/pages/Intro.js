import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {TypeText} from '../components/TypeText';
import {BotonWD} from '../components/BotonWD';
import { Link } from 'react-router-dom';

const Intro = () => 
{
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
            
            <Layout>
                <div>
                        <Logo263></Logo263>

                        <TypeText FFont="HackedFont" TypeTag="h1" TextOriginal="Estas dispuesto a entrar?"><>
                            
                            </>
                        </TypeText>
                        <div className="Cont-Btns">
                        <Link to="/Principal/">
                            <BotonWD FontSize="65px" Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55">
                                SÍ
                            </BotonWD>
                        </Link>
                        <Link to="/Principal/">
                            <BotonWD FontSize="65px" WidthPx="190px" HeightPx="104px" FFont="Forgotten Futurist" Color="#E31075" ColorAdentro="#181E35" Tamanio="55" EventHoverOut={changeToInitial} EventHover={changeTextButton}>
                                {TextBtnWD === true ? "NO" :  <TypeText TypeTag="" TextOriginal="SÍ"><></></TypeText>}
                            </BotonWD>
                        </Link>
                        </div>

                        <h2 className="Hacked-font">Abandona toda esperanza todo aquel que entre aqui</h2>
                    </div>
            </Layout>
        </div>
    )
}

export default Intro;