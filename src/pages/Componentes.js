import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {BotonWD} from '../components/BotonWD';
import {NavBar} from "../components/NavBar";
import {TitleH2} from '../components/TitleH2';
import {DivNosIndividual} from '../components/DivNosIndividual'
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton"
import {Rombo} from '../components/Rombo';

const Componentes = () => 
{
    return (
        <div className="App">
            <Layout>
                    <div style={{top:7+"em"}}>
                        
                        <NavBar>
                        </NavBar>

                    <TitleH2 style={{width: "50%"}} FontS="1em" FontF="Forgotten Futurist" Color="white">
                           Logo
                        </TitleH2>
                    <Logo263/>

                    

                    <div style={{top:7+"em"}}> 
                        <TitleH2 style={{width: "50%"}} FontS="1em" FontF="Forgotten Futurist" Color="white">
                           Rombos
                        </TitleH2>
                        <Rombo Color="#35BDE4" ColorAdentro="#000000" Tamanio="35"/> 
                        <Rombo Color="#10E3A2" ColorAdentro="#000000" Tamanio="35"/> 
                        <Rombo Color="#E31075" ColorAdentro="#000000" Tamanio="35"/>
                    </div>
                    
                    <div style={{top:7+"em"}}>
                        <TitleH2 style={{width: "50%"}} FontS="1em" FontF="Forgotten Futurist" Color="white">
                           Boton
                        </TitleH2>
                        <BotonWD FontSize="30px" Color="#35BDE4" ColorAdentro="#181E35" Tamanio="55" style="width:100%">
                                Boton de ejemplo 
                            </BotonWD></div>

                    <div className="Section-Subjects" style={{top:7+"em"}}>
                        <TitleH2 style={{width: "50%"}} FontS="1em" FontF="Forgotten Futurist" Color="white">
                           Card
                        </TitleH2>
                        <DivNosIndividual Subject="Sujeto #Componente" Name="Texto De Muestra" PictureInsta="../img/instagram_1.jpeg"/>
                    </div>


                    </div>
            </Layout>
        </div>
    )
}

export default Componentes;