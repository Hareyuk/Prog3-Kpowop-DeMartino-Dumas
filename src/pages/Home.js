import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {TypeText} from '../components/TypeText';
import {BotonWD} from '../components/BotonWD';
import App from '../components/App';

const Home = () => 
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
                        <BotonWD Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55">
                            SÍ
                        </BotonWD>
                        <BotonWD  FFont="Forgotten Futurist" Color="#E31075" ColorAdentro="#181E35" Tamanio="55" eventHoverOut={changeToInitial} eventHover={changeTextButton}>
                            {TextBtnWD === true ? "NO" :  <TypeText TypeTag="" TextOriginal="SÍ"><></></TypeText>}
                        </BotonWD>
                        </div>

                        <h2 className="Hacked-font">Abandona toda esperanza todo aquel que entre aqui</h2>
                    </div>
            </Layout>
        </div>
    )
}

export default Home;