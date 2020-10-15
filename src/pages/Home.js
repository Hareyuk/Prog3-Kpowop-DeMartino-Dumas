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
                    <BotonWD Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55">
                            LOGIN
                        </BotonWD>
                    <Logo263></Logo263>
                    <TitleH2 FontS="1.8em" FontF="Forgotten Futurist" Color="white">El proyecto #263 fue realizado por dos alumnos de la Universidad Maimónides con el fin de conquistar a la humanidad
                        </TitleH2>
                    </div>
            </Layout>
        </div>
    )
}

export default Home;