import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {DivInfoDash} from '../components/DivInfoDash';
import {NavBar} from "../components/NavBar";
import Profile from "../components/Profile";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton"

const Dashboard = () => 
{
    return (
        <div className="App">
            <Layout>
                    <div>
                        <NavBar/>
                        <LoginButton/>
                        <LogoutButton/>
                        <h1 style={{color: 'white', margin: 0}} >Dashboard</h1>
                        <Logo263></Logo263>
                        <div>
                        {/* <DivInfoDash>
                            <h3>Sujeto #0003</h3>
                            <h4>Nombre: Utena Tenjou</h4>
                            <img src="/img/instagram_1.jpeg" alt="QR Code"/>
                        </DivInfoDash> */}
                        <DivInfoDash>
                            <Profile/>
                        </DivInfoDash>
                        </div>
                        <div>
                        <DivInfoDash>
                            <h3>Super Smash Bros Ultimate</h3>
                            <div className="Box-Texts">
                                <h4>Género: Lucha 2D</h4>
                                <h4>Creador: Mashihiro Sakurai</h4>
                                <h4>Plataforma: Nintendo Switch</h4>
                            </div>
                        </DivInfoDash>
                       
                        <DivInfoDash>
                            <h3>Shoujo Kakumei Utena: Itsuka Kakumei Sareru Monogatari</h3>
                            <div className="Box-Texts">
                                <h4>Género: Visual Novel</h4>
                                <h4>Creador: Kunihiko Ikuhara</h4>
                                <h4>Plataforma: Sega Saturn</h4>
                            </div>
                        </DivInfoDash>
                        <DivInfoDash>
                            <h3>Shoujo Kakumei Utena: Itsuka Kakumei Sareru Monogatari</h3>
                            <div className="Box-Texts">
                                <h4>Género: Visual Novel</h4>
                                <h4>Creador: Kunihiko Ikuhara</h4>
                                <h4>Plataforma: Sega Saturn</h4>
                            </div>
                        </DivInfoDash>
                        </div>
                    </div>
            </Layout>
        </div>
    )
}

export default Dashboard;