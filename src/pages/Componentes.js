import React, { useState } from 'react';
import Layout from '../containers/Layout';
import { Logo263 } from '../components/Logo263';
import { BotonWD } from '../components/BotonWD';
import { NavBar } from "../components/NavBar";
import { TitleH2 } from '../components/TitleH2';
import { DivNosIndividual } from '../components/DivNosIndividual'
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton"
import { Rombo } from '../components/Rombo';
import { TitleH1 } from '../components/TitleH1';
import { DivInfoDash } from '../components/DivInfoDash';
import { Link } from 'react-router-dom';

const Componentes = () => {
    return (
        <div className="App">
            <Layout>
                <div style={{ top: "4em" }}>

                    <NavBar>
                    </NavBar>


                    <TitleH1 Color="#35BDE4" FontS="70px" FontF="HackedFont" style={{ color: 'white', margin: 0 }} >Componentes</TitleH1>
                    <div>
                        <TitleH2 style={{ width: "50%" }} FontS="1.8em" FontF="Forgotten Futurist" Color="white">
                            Logo
                        </TitleH2>
                        <Logo263 />
                    </div>


                    <div style={{ padding: "4em" }}>
                        <TitleH2 style={{ width: "50%" }} FontS="1.8em" FontF="Forgotten Futurist" Color="white">
                            Rombos
                        </TitleH2>
                        <Rombo Color="#35BDE4" ColorAdentro="#000000" Tamanio="50" />
                        <Rombo Color="#10E3A2" ColorAdentro="#000000" Tamanio="50" />
                        <Rombo Color="#E31075" ColorAdentro="#000000" Tamanio="50" />
                    </div>

                    <div style={{ top: "4em" }}>
                        <TitleH2 style={{ width: "50%" }} FontS="1.8em" FontF="Forgotten Futurist" Color="white">
                            Boton
                        </TitleH2> <BotonWD FontSize="30px" Color="#E31075" ColorAdentro="#181E35" Tamanio="55" style="width:100%">
                            Boton de ejemplo
                            </BotonWD></div>

                    <div className="Section-Subjects" style={{ top: 7 + "em" }}>
                        <TitleH2 style={{ width: "50%" }} FontS="1.8em" FontF="Forgotten Futurist" Color="white">
                            Card Nosotros
                        </TitleH2>
                        <DivNosIndividual style={{ display: "inline-table" }} Subject="Sujeto #Componente" Name="Texto De Muestra" PictureInsta="../img/instagram_1.jpeg" />
                        <TitleH2 style={{ width: "50%" }} FontS="1.8em" FontF="Forgotten Futurist" Color="white">
                            Card Dashboard
                        </TitleH2>
                        <DivInfoDash style={{ display: "inline-table" }}>
                            <h3>Super Texto</h3>
                            <div className="Box-Texts">
                                <h4>Género: Segun Juego</h4>
                                <h4>Creador: Segun Juego</h4>
                                <h4>Plataforma: Segun Juego</h4>
                            </div>
                        </DivInfoDash>
                    </div>
                    <div style={{ padding: "15em" }}>
                    <TitleH2 style={{ width: "50%" }} FontS="1.8em" FontF="Forgotten Futurist" Color="white">
                            Click the button to go nowhere
                        </TitleH2>
                        <Link to="404">
                            <BotonWD FontSize="65px" Color="#E31075" ColorAdentro="#181E35" Tamanio="55">
                                Enter the void
                            </BotonWD>
                        </Link>
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default Componentes;