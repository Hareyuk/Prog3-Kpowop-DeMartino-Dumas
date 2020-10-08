import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {BotonWD} from '../components/BotonWD';
import {NavBar} from "../components/NavBar";

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
                        
                        <NavBar>
                        </NavBar>
                        
                    </div>
                    <div>
                    <Logo263></Logo263>
                       
                        <BotonWD Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55">
                            LOGIN
                        </BotonWD>
                        <h2 className="Forgotten Futurist">Este proyecto fue creado por alumnos de la Universidad Maimónides para dominar al mundo</h2>
                        </div>
            </Layout>
        </div>
    )
}

export default Home;