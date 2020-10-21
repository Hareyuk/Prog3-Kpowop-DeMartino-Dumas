import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {BotonWD} from '../components/BotonWD';
import {NavBar} from "../components/NavBar";
import {TitleH2} from '../components/TitleH2';
import LoginButton from "../components/LoginButton";
import LogoutButton from '../components/LogoutButton';
import ContNintyWidth from '../components/ContNintyWidth';

const Home = () => 
{
    return (
        <div className="App">
            <Layout>
                    <div>
                        <NavBar>
                        </NavBar>
                        <LoginButton/>
                        <LogoutButton/>
                    <Logo263></Logo263>
                    <ContNintyWidth>
                        <TitleH2 FontS="1.8em" FontF="Forgotten Futurist" Color="white" CenterText="true">
                            El proyecto #263 fue realizado por dos alumnos de la Universidad Maimónides con el fin de conquistar a la humanidad
                        </TitleH2>
                    </ContNintyWidth>
                    </div>
            </Layout>
        </div>
    )
}

export default Home;