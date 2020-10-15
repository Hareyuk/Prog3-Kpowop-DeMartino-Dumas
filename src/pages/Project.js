import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {DivInfoProject} from '../components/DivInfoProject';
import {NavBar} from "../components/NavBar";
import {SearchBar} from "../components/SearchBar";
import ContProject from '../components/ContProject';
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton"

const Project = () => 
{
    return (
        <div className="App">
            <Layout>
                    <Logo263 ToSide={true}></Logo263>
                    <ContProject>
                        <NavBar/>
                            <LoginButton/>
                            <LogoutButton/>
                            <h1 style={{color: 'white', margin: 0}} >Proyecto</h1>
                            <SearchBar/>
                            <div className="divsInfo">
                                <DivInfoProject>
                                    <h3>Super Smash Bros Ultimate</h3>
                                    <div className="Box-Texts">
                                        <h4>Género: Lucha 2D</h4>
                                        <h4>Creador: Mashihiro Sakurai</h4>
                                        <h4>Plataforma: Nintendo Switch</h4>
                                    </div>
                                </DivInfoProject>
                                <DivInfoProject>
                                    <h3>Super Smash Bros Ultimate</h3>
                                    <div className="Box-Texts">
                                        <h4>Género: Lucha 2D</h4>
                                        <h4>Creador: Mashihiro Sakurai</h4>
                                        <h4>Plataforma: Nintendo Switch</h4>
                                    </div>
                                </DivInfoProject>
                                <DivInfoProject>
                                    <h3>Super Smash Bros Ultimate</h3>
                                    <div className="Box-Texts">
                                        <h4>Género: Lucha 2D</h4>
                                        <h4>Creador: Mashihiro Sakurai</h4>
                                        <h4>Plataforma: Nintendo Switch</h4>
                                    </div>
                                </DivInfoProject>
                                <DivInfoProject>
                                    <h3>Shoujo Kakumei Utena: Itsuka Kakumei Sareru Monogatari</h3>
                                    <div className="Box-Texts">
                                        <h4>Género: Visual Novel</h4>
                                        <h4>Creador: Kunihiko Ikuhara</h4>
                                        <h4>Plataforma: Sega Saturn</h4>
                                    </div>
                                </DivInfoProject>
                            </div>
                    </ContProject>
            </Layout>
        </div>
    )
}

export default Project;