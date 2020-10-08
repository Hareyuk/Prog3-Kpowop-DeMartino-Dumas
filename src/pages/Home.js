import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {BotonWD} from '../components/BotonWD';
import {NavBar} from "../components/NavBar";
import {TitleH2} from '../components/TitleH2';

const Home = () => 
{
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
                        <TitleH2 FontS="1.3em" FontF="Forgotten Futurist" Color="white">Este proyecto fue creado por alumnos de la Universidad Maimónides para dominar al mundo
                        </TitleH2>
                    </div>
            </Layout>
        </div>
    )
}

export default Home;