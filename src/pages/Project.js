import React, {useState} from 'react';
import Layout from '../containers/Layout';
import {Logo263} from '../components/Logo263';
import {DivInfoDash} from '../components/DivInfoDash';
import {NavBar} from "../components/NavBar";


const Project = () => 
{
    return (
        <div className="App">
            <Layout>
                    <div>
                        <NavBar/>
                        <h1 style={{color: 'white', margin: 0}} >Proyecto</h1>
                        <Logo263></Logo263>
                        <DivInfoDash>
                            <h3>Super Smash Bros Ultimate</h3>
                            <div className="Box-Texts">
                                <h4>Género: Lucha 2D</h4>
                                <h4>Creador: Mashihiro Sakurai</h4>
                                <h4>Plataforma: Nintendo Switch</h4>
                            </div>
                        </DivInfoDash>
                        <DivInfoDash>
                            <h3>Super Smash Bros Ultimate</h3>
                            <div className="Box-Texts">
                                <h4>Género: Lucha 2D</h4>
                                <h4>Creador: Mashihiro Sakurai</h4>
                                <h4>Plataforma: Nintendo Switch</h4>
                            </div>
                        </DivInfoDash>
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
                    </div>
            </Layout>
        </div>
    )
}

export default Project;